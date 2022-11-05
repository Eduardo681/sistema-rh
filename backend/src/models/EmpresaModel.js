let knex = require('../database/connection');

class EmpresaModel {

    async findAll() {
        try {
            return await knex.select(['id', 'nome', 'missao', 'visao', 'valores', 'politica', 'penalidades', 'created_at', 'updated_at']).table("empresa");
        } catch (err) {
            throw err;
            return [];
        }
    }

    async findById(id) {
        try {
            let result = await knex.select(['id', 'nome', 'missao', 'visao', 'valores', 'politica', 'penalidades', 'created_at', 'updated_at'])
                .table("empresa")
                .where({id: id});
            if (result.length > 0) {
                return result[0]
            } else {
                return undefined;
            }
        } catch (err) {
            throw err;
            return undefined;
        }
    }

    async update(id, missao, visao, valores, politica, penalidades) {
        let empresa = await this.findById(id);
        if (empresa !== undefined) {
            let editEmpresa = empresa;
            if (missao !== undefined && missao.trim() !== '') {
                editEmpresa.missao = missao;
            }
            if (visao !== undefined && visao.trim() !== '') {
                editEmpresa.visao = visao;
            }
            if (valores !== undefined && valores.trim() !== '') {
                editEmpresa.valores = valores;
            }
            if (politica !== undefined && politica.trim() !== '') {
                editEmpresa.politica = politica;
            }
            if (penalidades !== undefined && penalidades.trim() !== '') {
                editEmpresa.penalidades = penalidades;
            }
            try {
                await knex.update(editEmpresa).where({id: id}).table("empresa")
                return {status: true}
            } catch (err) {
                return {status: false, err: err};
            }
        } else {
            return {status: false, err: 'A empresa não existe'};
        }
    }
}

module.exports = new EmpresaModel();