const bidsRouter = require("express").Router();
const bidsModel = require("./bids-model");
const { requiresRole } = require("../helpers/roles");

bidsRouter.get("/", requiresRole("admin"), async (req, res) => {
  const allbids = await bidsModel.getAll();
  
  res.status(200).json(allbids);
});

bidsRouter.post("/", async (req, res) => {
  const bidInfo = req.body;
  const addResult = await categoriesModel.add(bidInfo);
  
  res.status(200).json(addResult);
});

bidsRouter.delete("/:bidId", requiresRole("admin"), async (req, res) => {
  const removeResult = await bidsModel.remove(req.params.bidId);
  
  res.status(200).json(removeResult);
});

module.exports = bidsRouter;