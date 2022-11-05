let knex = require('../database/connection');

class PerguntasModel {

    async findAll() {
        try {
            return await knex.select(['id', 'tipo', 'pergunta', 'opcao_a', 'opcao_b', 'opcao_c', 'opcao_d',
                'opcao_correta', 'empresa', 'created_at', 'updated_at']).table("perguntas");
        } catch (err) {
            throw err;
            return [];
        }
    }

    async findByType(tipo) {
        try {
            let result = await knex.select(['id', 'tipo', 'pergunta', 'opcao_a', 'opcao_b', 'opcao_c', 'opcao_d',
                'opcao_correta', 'empresa', 'created_at', 'updated_at']).table("perguntas")
                .where({tipo: tipo});
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

    async findById(id) {
        try {
            let result = await knex.select(['id', 'tipo', 'pergunta', 'opcao_a', 'opcao_b', 'opcao_c', 'opcao_d',
                'opcao_correta', 'empresa', 'created_at', 'updated_at']).table("perguntas")
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

    async update(id, tipo, pergunta_nova, opcao_a, opcao_b, opcao_c, opcao_d, opcao_correta) {
        let pergunta = await this.findById(id);
        if (pergunta !== undefined) {
            let editPergunta = pergunta;
            if (tipo !== undefined && tipo.trim() !== '') {
                editPergunta.tipo = tipo;
            }
            if (pergunta_nova !== undefined && pergunta_nova.trim() !== '') {
                editPergunta.pergunta_nova = pergunta_nova;
            }
            if (opcao_a !== undefined && opcao_a.trim() !== '') {
                editPergunta.opcao_a = opcao_a;
            }
            if (opcao_b !== undefined && opcao_b.trim() !== '') {
                editPergunta.opcao_b = opcao_b;
            }
            if (opcao_c !== undefined && opcao_c.trim() !== '') {
                editPergunta.opcao_c = opcao_c;
            }
            if (opcao_d !== undefined && opcao_d.trim() !== '') {
                editPergunta.opcao_d = opcao_d;
            }
            if (opcao_correta !== undefined && opcao_correta.trim() !== '') {
                editPergunta.opcao_correta = opcao_correta;
            }

            try {
                await knex.update(editPergunta).where({id: id}).table("pergunta")
                return {status: true}
            } catch (err) {
                return {status: false, err: err};
            }
        } else {
            return {status: false, err: 'A pergunta não existe'};
        }
    }


    async create(tipo, pergunta, opcao_a, opcao_b, opcao_c, opcao_d, opcao_correta, empresa, vaga) {
        try {
            await knex.insert({
                tipo,
                pergunta,
                opcao_a,
                opcao_b,
                opcao_c,
                opcao_d,
                opcao_correta,
                empresa,
                vaga
            }).table('pergunta');
        } catch (err) {
            throw err;
        }
    }

    async delete(id) {
        let pergunta = await this.findById(id);
        if (pergunta !== undefined) {
            try {
                await knex.delete().where({id: id}).table("pergunta");
                return {status: true}
            } catch (err) {
                throw err;
                return {status: false, err: err}
            }
        } else {
            return {status: false, err: "A pergunta não existe."}
        }
    }
}

module.exports = new PerguntasModel();