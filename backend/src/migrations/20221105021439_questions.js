exports.up = function(knex) {
    return knex.schema.createTable('perguntas', function (table) {
        table.increments();
        table.enum('tipo', ["TESTE_LOGICO", "TESTE_TECNICO", "TESTE_INTERPRETACAO"]).notNullable();
        table.string('pergunta', 255).notNullable();
        table.string('opcao_a', 255).notNullable();
        table.string('opcao_b', 255).notNullable();
        table.string('opcao_c', 255).notNullable();
        table.string('opcao_d', 255).notNullable();
        table.string('opcao_correta');
        table.bigint('empresa');
        table.bigint('vaga');
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

        table.foreign('empresa').references('id').inTable('empresa');
        table.foreign('vaga').references('id').inTable('vagas');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('perguntas');
};
