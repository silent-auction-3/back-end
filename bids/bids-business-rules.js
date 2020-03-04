function handleUserAddBid(userId, bidInfo) {
  bidInfo.buyer_id = userId;

  if (bidInfo.bid_amount <= 0 ) {
    return [false, "Bid amount is not valid"];
  }
  
  return [true, "OK"];
}

module.exports = {
  handleUserAddBid
}
