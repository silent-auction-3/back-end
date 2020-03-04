const auctionsModel = require("./auctions-model");

/**
 * Some validation logic
 * 
 * @param {number} userId 
 * @param {object} auctionInfo 
 */
function handleUserAddAuction(userId, auctionInfo) {
  auctionInfo.seller_id = userId;

  if (auctionInfo.num_days < 1 || auctionInfo.num_days > 7) {
    return [false, "Auction length must be between 1-7 days"];
  }
  
  return [true, "OK"];
}

/**
 * The userId must be the seller_id in the Auction
 * Only allow "title" and "description" to change
 * although modifying an auction with any bids should be a no-no!
 * 
 * @param {number} userId 
 * @param {object} auctionInfo 
 */
async function handleUserEditAuction(userId, auctionInfo) {
  const sanitizedAuctionInfo = {
    id: auctionInfo.id,
    seller_id: userId
  };

  if (!auctionInfo.id) {
    return [false, "Missing required field: id"];
  }

  const auctionResults = await auctionsModel.getAuctionById(auctionInfo.id);
  const existingAuction = auctionResults[0];

  if (!existingAuction) {
    return [false, "Auction does not exist"];
  }

  if (existingAuction.seller_id !== userId) {
    return [false, "You cannot modify an auction that you have not created"];
  }

  if (auctionInfo.title) {
    sanitizedAuctionInfo.title = auctionInfo.title;
  }

  if (auctionInfo.description) {
    sanitizedAuctionInfo.description = auctionInfo.description;
  }
  
  return [true, "OK", sanitizedAuctionInfo];
}

module.exports = {
  handleUserAddAuction,
  handleUserEditAuction
}
