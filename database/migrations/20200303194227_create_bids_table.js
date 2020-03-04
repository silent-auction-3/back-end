exports.up = function(knex) {
  return knex.schema.createTable("bids", bidsTable => {
    bidsTable.increments();
    bidsTable.integer("auction_id")
      .unsigned()
      .references("id")
      .inTable("auctions")
      .onUpdate("CASCADE")
      .onDelete("SET NULL");
    bidsTable.integer("buyer_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("SET NULL");
    bidsTable.decimal("bid_amount")
      .notNullable();
    bidsTable.timestamp("created_at")
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("bids");
};
