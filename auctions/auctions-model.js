const DB = require("../database/connection");

function getAll() {
  return DB("auctions")
    .join("auction_categories", "auction_categories.id", "auctions.category_id");
}

function add(auctionInfo) {
  return DB("auctions").insert(auctionInfo).returning("id");
}

function remove(id) {
  return DB("auctions").where({ id }).delete();
}

module.exports = {
  getAll,
  add,
  remove
};
