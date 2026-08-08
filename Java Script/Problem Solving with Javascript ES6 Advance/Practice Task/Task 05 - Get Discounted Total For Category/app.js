const getDiscountedTotalForCategory = (products, category) => {
  const filterProduct = products.filter((item) => item.category === category);
  const filterPrices = filterProduct.map((item) => item.price * 0.9);
  const totalPrice = filterPrices.reduce((accum, price) => {
    return accum + price;
  }, 0);
  return totalPrice;
};

const products = [
  { name: "Pen", category: "stationery", price: 100 },
  { name: "Bag", category: "accessory", price: 500 },
  { name: "Notebook", category: "stationery", price: 60 },
];
const category = "stationery";

console.log(getDiscountedTotalForCategory(products, category));
