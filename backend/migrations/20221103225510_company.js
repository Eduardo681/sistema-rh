exports.up = function (knex) {
    return knex.schema.createTable('empresa', function (table) {
        table.increments();
        table.string('nome', 255).notNullable().unique();
        table.string('missao', 255).notNullable();
        table.string('visao', 255).notNullable();
        table.string('valores', 255).notNullable();
        table.string('politica', 1000).notNullable();
        table.string('penalidades', 1000);
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('empresa');
};