const DB = require("../database/connection");

const auctionsSelect = [
  "auctions.id as id",
  "users.username as seller_name",
  "users.id as seller_id",
  "auctions.title as title",
  "auctions.description as description",
  "auction_categories.category_name as category_name",
  "auctions.start_price as start_price",
  "auctions.num_days as num_days",
  "auctions.status as status",
  "auctions.created_at as start_date"
];

function getAll() {
  return DB("auctions")
    .select(...auctionsSelect)
    .join("auction_categories", "auction_categories.id", "auctions.category_id")
    .join("users", "users.id", "auctions.seller_id");
}

function add(auctionInfo) {
  return DB("auctions").insert(auctionInfo).returning("id");
}

function remove(id) {
  return DB("auctions").where({ id }).delete();
}

function getAuctionsBySellerId(sellerId) {
  return DB("auctions")
    .select(...auctionsSelect)
    .join("auction_categories", "auction_categories.id", "auctions.category_id")
    .join("users", "users.id", "auctions.seller_id")
    .where("auctions.seller_id", sellerId);
}

module.exports = {
  getAll,
  getAuctionsBySellerId,
  add,
  remove
};
