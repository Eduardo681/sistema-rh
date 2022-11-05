let Vagas = require('../models/VagasModel')

class VagasController {
    async findAll(req, res) {
        let vagas = await Vagas.findAll();
        res.json(vagas)
    }

    async findVaga(req, res) {
        let id = req.params.id;
        let vaga = await Vagas.findById(id);
        if (vaga === undefined) {
            res.status(404);
            res.json({});
        } else {
            res.json(vaga)
        }
    }


    async edit(req, res) {
        let {
            id, nome_vaga, salario, plano_de_carreira, descricao, perc_acerto_logico,
            perc_acerto_interpretacao, perc_acerto_tecnico, requisitos, diferenciais
        } = req.body;
        let result = await Vagas.update(id, nome_vaga, salario, plano_de_carreira, descricao, perc_acerto_logico,
            perc_acerto_interpretacao, perc_acerto_tecnico, requisitos, diferenciais);
        if (result !== undefined) {
            if (result.status) {
                res.send('Vaga atualizada com sucesso')
            } else {
                res.status(406);
                res.json(result);
            }
        } else {
            res.status(500);
            res.json({err: 'Ocorreu um erro no servidor'});
        }
    }

    async create(req, res) {
        let {
            nome_vaga, salario, plano_de_carreira, descricao, perc_acerto_logico,
            perc_acerto_interpretacao, perc_acerto_tecnico, requisitos, diferenciais
        } = req.body;
        let result = await Vagas.create(nome_vaga, salario, plano_de_carreira, descricao, perc_acerto_logico,
            perc_acerto_interpretacao, perc_acerto_tecnico, requisitos, diferenciais);
        if (result !== undefined) {
            if (result.status) {
                res.send('Vaga criada com sucesso');
                res.json(result);
            } else {
                res.status(406);
                res.json(result);
            }
        } else {
            res.status(500);
            res.json({err: 'Ocorreu um erro no servidor'});
        }
    }

    async delete(req, res) {
        let id = req.params.id;
        let pergunta = await Vagas.delete(id);
        if (pergunta === undefined) {
            res.status(404);
            res.json({});
        } else {
            res.json(pergunta)
        }
    }
}

module.exports = new VagasController();