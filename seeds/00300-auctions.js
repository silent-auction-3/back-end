const listOfAuctions = [
  {
    seller_id: 1, // Asher
    category_id: 4, // Collectables
    title: "Ancient Whistle",
    description: "This whistle was used by King Herod to call in his retainers",
    num_days: 3,
    start_price: 2.50,
    image_url: "https://images.vcoins.com/product_image/238/9/6/9Ta9E7KtNj2f3NpGA65ixX8GCjg45d.jpg"
  },
  {
    seller_id: 2, // Mary
    category_id: 5, // Home & Garden
    title: "King size mattress with bed frame",
    description: "The mattress is slightly soiled",
    num_days: 7,
    start_price: 105.00,
    image_url: "https://www.stayathomemum.com.au/wp-content/uploads/2016/08/vida-de-un-colchon.jpg"
  },
];

exports.seed = function(knex) {
  return knex("auctions").insert(listOfAuctions);
};
