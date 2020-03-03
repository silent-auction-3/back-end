const listOfUsers = [
  {
    username: "Asher",
    password: "$2a$08$d5JUuqoQtGK9ZviCmFAJ0ewT.npDuqSx.gJoPYjKAYso8QYCVUyA6",
    role_id: 2
  }
];

exports.seed = function(knex) {
  return knex("users")
    .delete()
    .then(() => {
      return knex("users").insert(listOfUsers);
    });
};
