exports.up = function(knex) {
  return knex.schema.createTable("auctions", auctionsTable => {
    auctionsTable.increments();
    auctionsTable.integer("seller_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    auctionsTable.string("title", 128)
      .notNullable();
    auctionsTable.string("description", 128)
      .notNullable();
    auctionsTable.integer("category_id")
      .unsigned()
      .references("id")
      .inTable("auction_categories")
      .onUpdate("CASCADE")
      .onDelete("SET NULL")
      .notNullable();
    auctionsTable.decimal("start_price")
      .notNullable();
    auctionsTable.integer("num_days")
      .unsigned()
      .notNullable(),
    auctionsTable.integer("status")
      .unsigned()
      .notNullable()
      .defaultTo(0),
    auctionsTable.timestamp("created_at")
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("auctions");
};
