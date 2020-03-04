exports.up = function(knex) {
  return knex.schema.table("auctions", auctionsTable => {
    auctionsTable.string("image_url", 1024);
  });  
};

exports.down = function(knex) {
  return knex.schema.table("auctions", auctionsTable => {
    auctionsTable.dropColumn("image_url");
  });  
};
