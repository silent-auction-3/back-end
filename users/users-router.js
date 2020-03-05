const usersRouter = require("express").Router();
const usersModel = require("./users-model");
const auctionsModel = require("../auctions/auctions-model");
const bidsModel = require("../bids/bids-model");
const { requiresRole } = require("../helpers/roles");

usersRouter.get("/", requiresRole("admin"), async (req, res) => {
  const allUsers = await usersModel.getAll();
  const cleanedUpAllUsers = allUsers.map(u => {
    return {
      id: u.id,
      username: u.username,
      role_name: u.role_name
    };
  });
  
  res.status(200).json(cleanedUpAllUsers);
});

usersRouter.get("/profile", async (req, res) => {
  const userInfo = await usersModel.getById(req.user.id);

  userInfo.password = "********";
  
  res.status(200).json(userInfo);
});

usersRouter.get("/auctions", async (req, res) => {
  const userAuctions = await auctionsModel.getAuctionsBySellerId(req.user.id);
  
  res.status(200).json(userAuctions);
});

usersRouter.get("/bids", async (req, res) => {
  const userBids = await bidsModel.getBidsByBuyerId(req.user.id);
  
  res.status(200).json(userBids);
});

module.exports = usersRouter;
