const getAvailableProducts = (products) => {
  const availableProducts = products.filter((product) => product.stock > 0);
  return availableProducts;
};

const products = [
  { name: "Pen", stock: 5 },
  { name: "Bag", stock: 0 },
  { name: "Notebook", stock: 2 },
];

console.log(getAvailableProducts(products));
