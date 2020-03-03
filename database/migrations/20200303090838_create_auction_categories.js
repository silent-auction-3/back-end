exports.up = function(knex) {
  return knex.schema.createTable("auction_categories", table => {
    table.increments();
    table
      .string("category_name", 64)
      .notNullable()
      .unique()
      .index();
    table.string("category_description", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("auction_categories");
};
