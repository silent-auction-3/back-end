const DB = require("../database/connection");

function getAll() {
  return DB("bids")
    .join("auctions", "auctions.id", "bids.auction_id");
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
