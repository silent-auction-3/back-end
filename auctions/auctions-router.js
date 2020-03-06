const auctionsRouter = require("express").Router();
const auctionsModel = require("./auctions-model");
const auctionsBR = require("./auctions-business-rules");
const { requiresRole } = require("../helpers/roles");

auctionsRouter.get("/", requiresRole("admin"), async (req, res) => {
  const allAuctions = await auctionsModel.getAll();
  
  res.status(200).json(allAuctions);
});

auctionsRouter.post("/", async (req, res) => {
  const auctionInfo = req.body;
  const [canProceed, errorMessage] = auctionsBR.handleUserAddAuction(req.user.id, auctionInfo);

  if (canProceed) {
    try {
      const addResult = await auctionsModel.add(auctionInfo);
    
      res.status(200).json(addResult[0]);
    }
    catch(e) {
      res.status(500).json(e.toString());
    }
  }
  else {
    res.status(400).json({ errorMessage });
  }
});

auctionsRouter.put("/", async (req, res) => {
  const auctionInfo = req.body;
  const auctionId = auctionInfo.id;
  const [canProceed, errorMessage, sanitizedAuctionInfo] = await auctionsBR.handleUserEditAuction(req.user.id, auctionInfo);

  if (canProceed) {
    try {
      const updateResult = await auctionsModel.update(auctionId, sanitizedAuctionInfo);
    
      res.status(200).json(updateResult);
    }
    catch(e) {
      res.status(500).json(e.toString());
    }
  }
  else {
    res.status(400).json({ errorMessage });
  }
});

auctionsRouter.delete("/:auctionId", async (req, res) => {
  try {
    const removeResult = await auctionsModel.remove(req.params.auctionId);

    res.status(200).json(removeResult);
  }
  catch (e) {
    res.status(500).json(e.toString());
  }
});

module.exports = auctionsRouter;