exports.up = function (knex) {
    return knex.schema.createTable('vagas', function (table) {
        table.increments();
        table.string("nome_vaga").notNullable();
        table.double("salario", 2).notNullable();
        table.string("plano_de_carreira", 1000);
        table.string("descricao", 1000);
        table.integer("perc_acerto_logico");
        table.integer("perc_acerto_interpretacao");
        table.integer("perc_acerto_tecnico");
        table.string("requisitos", 1000)
        table.string("diferenciais", 1000)
        table.bigint("empresa")
        table.foreign('empresa').references('id').inTable('empresa');
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable('vagas');
};
