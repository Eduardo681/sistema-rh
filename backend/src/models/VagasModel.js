let knex = require('../database/connection');
const Perguntas = require("./PerguntasModel");

class VagasModel {

    async findAll() {
        try {
            return await knex.select(['id', 'nome_vaga', 'salario', 'plano_de_carreira', 'descricao', 'perc_acerto_logico', 'perc_acerto_interpretacao',
                'perc_acerto_tecnico', 'requisitos', 'diferenciais', 'empresa', 'created_at', 'updated_at']).table("vagas");
        } catch (err) {
            throw err;
            return [];
        }
    }

    async findById(id) {
        try {
            let result = await knex.select(['id', 'nome_vaga', 'salario', 'plano_de_carreira', 'descricao', 'perc_acerto_logico', 'perc_acerto_interpretacao',
                'perc_acerto_tecnico', 'requisitos', 'diferenciais', 'empresa', 'created_at', 'updated_at']).table("vagas")
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

    async delete(id) {
        let vaga = await this.findById(id);
        if (vaga !== undefined) {
            try {
                await knex.delete().where({id: id}).table("vagas");
                return {status: true}
            } catch (err) {
                throw err;
                return {status: false, err: err}
            }
        } else {
            return {status: false, err: "A vaga não existe."}
        }
    }

    async create(nome_vaga, salario, plano_de_carreira, descricao, perc_acerto_logico,
                 perc_acerto_interpretacao, perc_acerto_tecnico, requisitos, diferenciais, empresa) {
        try {
            await knex.insert({
                nome_vaga,
                salario,
                plano_de_carreira,
                descricao,
                perc_acerto_logico,
                perc_acerto_interpretacao,
                perc_acerto_tecnico,
                requisitos,
                diferenciais,
                empresa
            }).table('vagas');
        } catch (err) {
            throw err;
        }
    }

    async update(id, nome_vaga, salario, plano_de_carreira, descricao, perc_acerto_logico,
                 perc_acerto_interpretacao, perc_acerto_tecnico, requisitos, diferenciais) {
        let vaga = await this.findById(id);
        if (vaga !== undefined) {
            let editVaga = vaga;
            if (nome_vaga !== undefined && nome_vaga.trim() !== '') {
                editVaga.nome_vaga = nome_vaga;
            }
            if (salario !== undefined && salario.trim() !== '') {
                editVaga.salario = salario;
            }
            if (plano_de_carreira !== undefined && plano_de_carreira.trim() !== '') {
                editVaga.plano_de_carreira = plano_de_carreira;
            }
            if (descricao !== undefined && descricao.trim() !== '') {
                editVaga.descricao = descricao;
            }
            if (perc_acerto_logico !== undefined && perc_acerto_logico.trim() !== '') {
                editVaga.perc_acerto_logico = perc_acerto_logico;
            }
            if (perc_acerto_interpretacao !== undefined && perc_acerto_interpretacao.trim() !== '') {
                editVaga.perc_acerto_interpretacao = perc_acerto_interpretacao;
            }
            if (perc_acerto_tecnico !== undefined && perc_acerto_tecnico.trim() !== '') {
                editVaga.perc_acerto_tecnico = perc_acerto_tecnico;
            }
            if (requisitos !== undefined && requisitos.trim() !== '') {
                editVaga.requisitos = requisitos;
            }
            if (diferenciais !== undefined && diferenciais.trim() !== '') {
                editVaga.diferenciais = diferenciais;
            }

            try {
                await knex.update(editVaga).where({id: id}).table("vagas")
                return {status: true}
            } catch (err) {
                return {status: false, err: err};
            }
        } else {
            return {status: false, err: 'A vaga não existe'};
        }
    }
}

module.exports = new VagasModel();