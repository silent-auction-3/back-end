const publicRouter = require("express").Router();
const categoriesModel = require("../categories/categories-model");
const auctionsModel = require("../auctions/auctions-model");

publicRouter.get("/categories", async (req, res) => {
  const allCategories = await categoriesModel.getAll();
  
  res.status(200).json(allCategories);
});

publicRouter.get("/auctions", async (req, res) => {
  const allAuctions = await auctionsModel.getAll();
  
  res.status(200).json(allAuctions);
});

module.exports = publicRouter;