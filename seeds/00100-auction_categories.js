const listOfAuctionCategories = [
  {
    category_name: "Fashion",
    category_description: "Clothing, Shoes, Jewelry, Watches"
  },
  {
    category_name: "Books, Movies & Music",
    category_description: "Books, Movies, Music, Musical Instuments, "
  },
  {
    category_name: "Electronics",
    category_description:
      "Cell Phones, Computers, Video Games & Consoles, Cameras, Home Electronics"
  },
  {
    category_name: "Collectibles & Art",
    category_description:
      "Collectibles, Sports Memorabilia, Coins & Paper Money, Art, Antiques"
  },
  {
    category_name: "Home & Garden",
    category_description:
      "Kitchen & Dining Supplies, Yard & Garden Equipment, Tools, Furniture"
  },
  {
    category_name: "Sporting Goods",
    category_description:
      "Indoor Games, Hunting Equipment, Outdoor Sports, Golf Equipment, Fishing Equipment"
  },
  {
    category_name: "Toys & Hobbies",
    category_description:
      "Action Figures, Games, Building Toys, Model Railroads, Vintage & Antique Toys"
  },
  {
    category_name: "Business & Industrial",
    category_description:
      "Healthcare, Office Equipment & Supplies, Restaurant & Food Service"
  },
  {
    category_name: "Health & Beauty",
    category_description:
      "Bath & Body Products, Vitamins & Dietary Supplements, Makeup Products, Fragrances, Health Care Products"
  },
  {
    category_name: "Others",
    category_description:
      "Tickets & Travel, Gift Cards & Coupons, Baby Essentials, Everything Else"
  }
];

exports.seed = function(knex) {
  return knex("auction_categories")
    .delete()
    .then(() => {
      return knex("auction_categories").insert(listOfAuctionCategories);
    });
};
