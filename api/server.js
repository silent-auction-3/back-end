const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");
const verifyUser = require("./verifyUser");
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");


server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json("Server OK");
});

// Private Endpoints

server.use("/api/users", verifyUser, usersRouter);

// Public Endpoints

server.use("/api/auth", authRouter);

module.exports = server;
