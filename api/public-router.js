const publicRouter = require("express").Router();
const categoriesModel = require("../categories/categories-model");
const auctionsModel = require("../auctions/auctions-model");
const bidsModel = require("../bids/bids-model");

publicRouter.get("/categories", async (req, res) => {
  const allCategories = await categoriesModel.getAll();
  
  res.status(200).json(allCategories);
});

publicRouter.get("/auctions", async (req, res) => {
  const allAuctions = await auctionsModel.getAll();

  // for (const auction of allAuctions) {
  //   auction.bids = await bidsModel.getBidsByAuctionId(auction.id);
  // }
  
  res.status(200).json(allAuctions);
});

publicRouter.get("/auctions/:id", async (req, res) => {
  const allAuctions = await auctionsModel.getAuctionById(req.params.id);
  const foundAuction = allAuctions[0];

  if (!foundAuction) {
    res.status(400).json({ errorMessage: "Auction not found"} );
  }
  else {
    foundAuction.bids = await bidsModel.getBidsByAuctionId(foundAuction.id);
    
    res.status(200).json(foundAuction);
  }
});

module.exports = publicRouter;