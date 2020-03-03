const usersRouter = require("express").Router();
const usersModel = require("./users-model");

usersRouter.get("/", async (req, res) => {
  const allUsers = await usersModel.getAll();
  const cleanedUpAllUsers = allUsers.map(u => {
    return {
      id: u.id,
      username: u.username,
      role_name: u.role_name
    };
  });
  
  res.status(200).json(cleanedUpAllUsers);
});

module.exports = usersRouter;
