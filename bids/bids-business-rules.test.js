const bidsBR = require("./bids-business-rules");

describe("Bids Business Rules", () => {
  it("verify testing", async () => {
    expect(true).toBe(true);
  });

  it("handleUserAddBid - bid_amount: in range", async () => {
    const bidInfo = {
      bid_amount: 2.50
    }
    const [canProceed, errorMessage] = bidsBR.handleUserAddBid(1, bidInfo);
    
    expect(canProceed).toBe(true);
    expect(errorMessage).toBe("OK");
  });

  it("handleUserAddBid - bid_amount: out of range", async () => {
    const bidInfo = {
      bid_amount: -2.50
    }
    const [canProceed, errorMessage] = bidsBR.handleUserAddBid(1, bidInfo);
    
    expect(canProceed).toBe(false);
    expect(errorMessage).toBe("Bid amount is not valid");
  });

  it("handleUserAddBid - buyer_id is userId", async () => {
    const bidInfo = {
      bid_amount: 2.50
    }
    const userId = 34;
    const [canProceed, errorMessage] = bidsBR.handleUserAddBid(userId, bidInfo);
    
    expect(bidInfo.buyer_id).toBe(userId);
  });
});