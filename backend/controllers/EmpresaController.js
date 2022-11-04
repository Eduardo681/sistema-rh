let Empresa = require('../models/EmpresaModel')

class EmpresaController {
    async index(req, res) {
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
        let {id, name, role, email} = req.body;
        let result = await User.update(id, email, name, role);
        if (result !== undefined) {
            if (result.status) {
                res.send('Usuario atualizado com sucesso')
            } else {
                res.status(406);
                res.json(result);
            }
        } else {
            res.status(406);
            res.json({err: 'Ocorreu um erro no servidor'});
        }
    }

    async delete(req, res) {
        let id = req.params.id;
        let result = await User.delete(id);
        if (result.status) {
            res.send("Deletado com sucesso")

        } else {
            res.status(406);
            res.json(result);
        }
    }

    async create(req, res) {
        let {email, name, password} = req.body;
        if (email === undefined || email.trim() === '') {
            res.status(400);
            res.json({err: "O e-mail é inválido"})
            return;
        }
        let emailExists = await User.findEmail(email);
        if (emailExists) {
            res.status(406)
            res.json({err: 'O e-mail já está cadastrado'})
            return;
        }
        await User.create(email, password, name)

        res.status(201);
            res.json({success: 'Empresa criada com sucesso'})
        return;
    }

    async validate(req,res) {
        res.send("Ok")
    }
}

module.exports = new EmpresaController();