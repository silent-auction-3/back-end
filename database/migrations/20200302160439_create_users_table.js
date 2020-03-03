exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("username", 64)
      .notNullable()
      .unique()
      .index();
    table
      .string("password", 64)
      .notNullable();
    table.integer("role_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("roles")
      .onUpdate("CASCADE")
      .onDelete("SET NULL");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
