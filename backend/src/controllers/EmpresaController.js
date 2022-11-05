let Empresa = require('../models/EmpresaModel')

class EmpresaController {
    async findAll(req, res) {
        let empresas = await Empresa.findAll();
        res.json(empresas)
    }

    async findEmpresa(req, res) {
        let id = req.params.id;
        let empresa = await Empresa.findById(id);
        if (empresa === undefined) {
            res.status(404);
            res.json({});
        } else {
            res.json(empresa)
        }
    }

    async edit(req, res) {
        let {id, missao, visao, valores, politica, penalidades} = req.body;
        let result = await Empresa.update(id, missao, visao, valores, politica, penalidades);
        if (result !== undefined) {
            if (result.status) {
                res.send('Empresa atualizada com sucesso')
            } else {
                res.status(406);
                res.json(result);
            }
        } else {
            res.status(500);
            res.json({err: 'Ocorreu um erro no servidor'});
        }
    }
}

module.exports = new EmpresaController();