exports.up = function(knex) {
  return knex.schema.createTable("roles", table => {
    table.increments();
    table
      .string("role_name", 64)
      .notNullable()
      .unique()
      .index();
    table.string("role_description", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("roles");
};
