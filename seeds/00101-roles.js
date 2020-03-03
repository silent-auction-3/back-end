const listOfRoles = [
  { role_name: "user", role_description: "Normal User" },
  { role_name: "admin", role_description: "Privileged User" }
];

exports.seed = function(knex) {
  return knex("roles")
    .delete()
    .then(() => {
      return knex("roles").insert(listOfRoles);
    });
};
