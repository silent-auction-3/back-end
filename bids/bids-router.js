const bidsRouter = require("express").Router();
const bidsModel = require("./bids-model");
const bidsBR = require("./bids-business-rules");
const { requiresRole } = require("../helpers/roles");

bidsRouter.get("/", requiresRole("admin"), async (req, res) => {
  const allbids = await bidsModel.getAll();
  
  res.status(200).json(allbids);
});

bidsRouter.post("/", async (req, res) => {
  const bidInfo = req.body;
  const [canProceed, errorMessage] = bidsBR.handleUserAddBid(req.user.id, bidInfo);

  if (canProceed) {
    try {
      const addResult = await bidsModel.add(bidInfo);
    
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

bidsRouter.delete("/:bidId", requiresRole("admin"), async (req, res) => {
  const removeResult = await bidsModel.remove(req.params.bidId);
  
  res.status(200).json(removeResult);
});

module.exports = bidsRouter;