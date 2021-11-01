exports.up = function(knex) {
  return knex.schema.createTable('clientes',function(table){
      table.increments('id')
      table.string('nome').notNullable()
      table.string('cpf', 15).notNullable().unique()
      table.string('email').notNullable()
      table.string('telefone', 15).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clientes')
};
