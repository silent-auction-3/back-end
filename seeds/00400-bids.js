const listOfBids = [
  {
    auction_id: 1,
    buyer_id: 2,
    bid_amount: 25.00
  },
  {
    auction_id: 1,
    buyer_id: 2,
    bid_amount: 125.10
  },
  {
    auction_id: 1,
    buyer_id: 2,
    bid_amount: 500.00
  },
  {
    auction_id: 2,
    buyer_id: 1,
    bid_amount: 105.01
  },
  {
    auction_id: 2,
    buyer_id: 1,
    bid_amount: 105.02
  },
  {
    auction_id: 2,
    buyer_id: 1,
    bid_amount: 105.99
  }
];

exports.seed = function(knex) {
  return knex("bids").insert(listOfBids);
};
