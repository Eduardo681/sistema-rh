exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('empresa').del()
  await knex('empresa').insert([
    {id: 1, nome: 'Tecno Pro', missao: '', visao: '', valores: '', politica: '', penalidades: '' },
  ]);
};
