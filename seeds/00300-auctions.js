const listOfAuctions = [
  {
    seller_id: 1, // Asher
    category_id: 4, // Collectables
    title: "Ancient Whistle",
    description: "This whistle was used by King Herod to call in his retainers",
    num_days: 3,
    start_price: 2.50
  },
  {
    seller_id: 2, // Mary
    category_id: 5, // Home & Garden
    title: "King size mattress with bed frame",
    description: "The mattress is slightly soiled",
    num_days: 7,
    start_price: 105.00
  },
];

exports.seed = function(knex) {
  return knex("auctions")
    .delete()
    .then(() => {
      return knex("auctions").insert(listOfAuctions);
    });
};
