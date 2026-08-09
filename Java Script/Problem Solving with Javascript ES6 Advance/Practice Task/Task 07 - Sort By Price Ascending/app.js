const sortByPriceAscending = (products) => {
  return [...products].sort((a, b) => a.price - b.price);
};

const products = [
  { name: "Bag", price: 500 },
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 60 },
];

console.log(sortByPriceAscending(products));
console.log(products);
