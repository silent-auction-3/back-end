const DB = require("../database/connection");

const usersSelect = [
  "users.id as id",
  "users.username as username",
  "users.password as password",
  "users.full_name as full_name",
  "users.email as email",
  "users.address as address",
  "users.phone_number as phone_number",
  "roles.id as role_id",
  "roles.role_name as role_name"
];

function getAll() {
  return DB("users")
    .select(...usersSelect)
    .join("roles", "users.role_id", "roles.id");
}

function getById(id) {
  return DB("users")
    .select(...usersSelect)
    .join("roles", "users.role_id", "roles.id")
    .where("users.id", id).first();
}

function getByUsername(username) {
  return DB("users")
    .select(...usersSelect)
    .join("roles", "users.role_id", "roles.id")
    .where("users.username", username).first();
}

function add(userInfo) {
  return DB("users").insert(userInfo).returning("id");
}

module.exports = {
  getAll,
  getById,
  getByUsername,
  add
};
