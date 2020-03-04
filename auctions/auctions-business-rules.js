function handleUserAddAuction(userId, auctionInfo) {
  auctionInfo.seller_id = userId;

  if (auctionInfo.num_days < 1 || auctionInfo.num_days > 7) {
    return [false, "Auction length must be between 1-7 days"];
  }
  
  return [true, "OK"];
}

module.exports = {
  handleUserAddAuction
}
