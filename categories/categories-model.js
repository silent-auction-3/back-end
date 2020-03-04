const DB = require("../database/connection");

function getAll() {
  return DB("auction_categories");
}

function add(categoryInfo) {
  return DB("auction_categories").insert(categoryInfo).returning("id");
}

function remove(id) {
  return DB("auction_categories").where({ id }).delete();
}

module.exports = {
  getAll,
  add,
  remove
};
