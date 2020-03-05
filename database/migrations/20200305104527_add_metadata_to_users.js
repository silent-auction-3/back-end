exports.up = function(knex) {
  return knex.schema.table("users", usersTable => {
    usersTable.string("full_name", 256);
    usersTable.string("address", 512);
    usersTable.string("email", 128);
    usersTable.string("phone_number", 64);
  });  
};

exports.down = function(knex) {
  return knex.schema.table("users", usersTable => {
    usersTable.dropColumn("full_name");
    usersTable.dropColumn("address");
    usersTable.dropColumn("email");
    usersTable.dropColumn("phone_number");
  });  
};