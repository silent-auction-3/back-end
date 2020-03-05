const DB = require("../database/connection");

const bidsSelect = [
  "bids.id as id",
  "auctions.id as auction_id",
  "bids.buyer_id as buyer_id",
  "users.username as buyer_name",
  "bids.bid_amount as bid_amount",
  "bids.created_at as bid_date"
];

function getAll() {
  return DB("bids")
    .select(...bidsSelect)
    .join("auctions", "auctions.id", "bids.auction_id")
    .join("users", "users.id", "bids.buyer_id");
}

function add(bidInfo) {
  return DB("bids").insert(bidInfo).returning("id");
}

function remove(id) {
  return DB("bids").where({ id }).delete();
}

function getBidsByBuyerId(buyerId) {
  return DB("bids")
    .select(...bidsSelect)
    .join("auctions", "auctions.id", "bids.auction_id")
    .join("users", "users.id", "bids.buyer_id")
    .where("bids.buyer_id", buyerId);
}

function getBidsByAuctionId(auctionId) {
  return DB("bids")
    .select(...bidsSelect)
    .join("auctions", "auctions.id", "bids.auction_id")
    .join("users", "users.id", "bids.buyer_id")
    .where("bids.auction_id", auctionId);
}

module.exports = {
  getAll,
  getBidsByBuyerId,
  getBidsByAuctionId,
  add,
  remove
};
