const DB = require("../database/connection");

function getAll() {
  return DB("users")
    .join("roles", "users.role_id", "roles.id");
}

function getById(id) {
  return DB("users")
    .join("roles", "users.role_id", "roles.id")
    .where("users.id", id).first();
}

function getByUsername(username) {
  return DB("users")
    .join("roles", "users.role_id", "roles.id")
    .where("users.username", username).first();
}

function getAuctionsBySellerId(sellerId) {
  return DB("auctions")
    .join("auction_categories", "auction_categories.id", "auctions.category_id")
    .where("auctions.seller_id", sellerId);
}

function add(userInfo) {
  return DB("users").insert(userInfo).returning("id");
}

module.exports = {
  getAll,
  getById,
  getByUsername,
  getAuctionsBySellerId,
  add
};
