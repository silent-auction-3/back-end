const bidsRouter = require("express").Router();
const bidssModel = require("./bids-model");
const { requiresRole } = require("../helpers/roles");

bidsRouter.get("/", requiresRole("admin"), async (req, res) => {
  res.status(200).json("BIDS OK");
});

module.exports = bidsRouter;