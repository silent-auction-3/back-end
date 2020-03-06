const auctionsBR = require("./auctions-business-rules");

describe("Auctions Business Rules", () => {
  it("verify testing", async () => {
    expect(true).toBe(true);
  });

  it("handleUserAddAuction - num of days for an auction: in range", async () => {
    const auctionInfo = {
      num_days: 5
    }
    const [canProceed, errorMessage] = auctionsBR.handleUserAddAuction(1, auctionInfo);
    
    expect(canProceed).toBe(true);
    expect(errorMessage).toBe("OK");
  });

  it("handleUserAddAuction - num of days for an auction: out of range", async () => {
    const auctionInfo = {
      num_days: 50
    }
    const [canProceed, errorMessage] = auctionsBR.handleUserAddAuction(1, auctionInfo);
    
    expect(canProceed).toBe(false);
    expect(errorMessage).toBe("Auction length must be between 1-7 days");
  });

  it("handleUserAddAuction - seller_id is userId", async () => {
    const auctionInfo = {
      num_days: 5
    }
    const userId = 34;
    const [canProceed, errorMessage] = auctionsBR.handleUserAddAuction(userId, auctionInfo);
    
    expect(auctionInfo.seller_id).toBe(userId);
  });
});