let Perguntas = require('../models/PerguntasModel')

class PerguntasController {
    async findAll(req, res) {
        let perguntas = await Perguntas.findAll();
        res.json(perguntas)
    }

    async findPergunta(req, res) {
        let id = req.params.id;
        let pergunta = await Perguntas.findById(id);
        if (pergunta === undefined) {
            res.status(404);
            res.json({});
        } else {
            res.json(pergunta)
        }
    }

    async findTipo(req, res) {
        let tipo = req.params.tipo;
        let pergunta = await Perguntas.findByType(tipo);
        if (pergunta === undefined) {
            res.status(404);
            res.json({});
        } else {
            res.json(pergunta)
        }
    }

    async edit(req, res) {
        let {id, tipo, pergunta_nova, opcao_a, opcao_b, opcao_c, opcao_d, opcao_correta} = req.body;
        let result = await Perguntas.update(id, tipo, pergunta_nova, opcao_a, opcao_b, opcao_c, opcao_d, opcao_correta);
        if (result !== undefined) {
            if (result.status) {
                res.send('Pergunta atualizada com sucesso')
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
        let {id, tipo, pergunta_nova, opcao_a, opcao_b, opcao_c, opcao_d, opcao_correta, empresa, vaga} = req.body;
        let result = await Perguntas.create(id, tipo, pergunta_nova, opcao_a, opcao_b, opcao_c, opcao_d, opcao_correta, empresa, vaga);
        if (result !== undefined) {
            if (result.status) {
                res.send('Pergunta criada com sucesso');
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
        let pergunta = await Perguntas.delete(id);
        if (pergunta === undefined) {
            res.status(404);
            res.json({});
        } else {
            res.json(pergunta)
        }
    }
}

module.exports = new PerguntasController();