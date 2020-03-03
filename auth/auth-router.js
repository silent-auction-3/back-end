const authRouter = require("express").Router();
const usersModel = require("../users/users-model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAdmin } = require("../helpers/roles");

authRouter.post("/register", async (req, res) => {
  const userInfo = req.body;

  if (!userInfo.username) {
    res.status(400).json({ "errorMessage": "Missing required field: username" });
  }
  else if (!userInfo.password) {
    res.status(400).json({ "errorMessage": "Missing required field: password" });
  }
  else {
    try {
      userInfo.role_id = 1; // normal user
      userInfo.password = bcryptjs.hashSync(userInfo.password, 8);
      
      res.status(201).json({ id: (await usersModel.add(userInfo))[0] });
    }
    catch (e) {
      if (e.constraint === "users_username_unique") { // postgresql only
        res.status(400).json({ "errorMessage": "This user already exists" });
      }
      else {
        res.status(500).json({ "errorMessage": e.toString() });
      }
    }
  }
});

authRouter.post("/login", async (req, res) => {
  const userInfo = req.body;

  if (!userInfo.username) {
    res.status(400).json({ "errorMessage": "Missing required field: username" });
  }
  else if (!userInfo.password) {
    res.status(400).json({ "errorMessage": "Missing required field: password" });
  }
  else {
    try {
      const userInDb = await usersModel.getByUsername(userInfo.username);

      if (userInDb && bcryptjs.compareSync(userInfo.password, userInDb.password)) {
        res.status(200).json({
          token: generateToken(userInDb)
        });
      }
      else {
        res.status(401).json({ "errorMessage": "The username and password are not accurate" });
      }
    }
    catch (e) {
      res.status(500).json({ "errorMessage": e.toString() });
    }
  }
});

function generateToken(user) {
  const payload = user;
  const secret = require("./secrets").jwtSecret;
  const options = {
    expiresIn: isAdmin(user) ? "1y": "30m"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = authRouter;