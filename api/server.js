const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json("Server OK");
});

module.exports = server;
