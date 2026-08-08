const getTotalStockValue = (products) => {
  const total = products.reduce((accum, product) => {
    return accum + product.price * product.stock;
  }, 0);
  return total;
};

const products = [
  { price: 50, stock: 4 },
  { price: 20, stock: 10 },
];
console.log(getTotalStockValue(products));
