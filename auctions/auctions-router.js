const auctionsRouter = require("express").Router();
const auctionsModel = require("./auctions-model");
const { requiresRole } = require("../helpers/roles");

auctionsRouter.get("/", requiresRole("admin"), async (req, res) => {
  const allAuctions = await auctionsModel.getAll();
  
  res.status(200).json(allAuctions);
});

module.exports = auctionsRouter;