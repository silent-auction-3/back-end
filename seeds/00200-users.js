const listOfUsers = [
  {
    username: "Asher",
    password: "$2a$08$d5JUuqoQtGK9ZviCmFAJ0ewT.npDuqSx.gJoPYjKAYso8QYCVUyA6",
    role_id: 2
  },
  {
    username: "Mary",
    password: "$2a$08$n0sWHjloxfMnYy5GLfpGdOjS2I2aOxsM4CywEpS6Y51K5YsmTB6D6",
    role_id: 1
  }
];

exports.seed = function(knex) {
  return knex("users")
    .delete()
    .then(() => {
      return knex("users").insert(listOfUsers);
    });
};
