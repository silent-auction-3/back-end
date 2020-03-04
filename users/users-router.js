const usersRouter = require("express").Router();
const usersModel = require("./users-model");
const auctionsModel = require("../auctions/auctions-model");
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

usersRouter.get("/auctions", async (req, res) => {
  const usersAuctions = await auctionsModel.getAuctionsBySellerId(req.user.id);
  
  res.status(200).json(usersAuctions);
});

module.exports = usersRouter;
