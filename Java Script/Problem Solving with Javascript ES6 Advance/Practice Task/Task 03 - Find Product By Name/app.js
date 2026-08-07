const findProductByName = (products, productName) => {
  const exactProduct = products.find((product) => product.name === productName);
  return exactProduct ? exactProduct : undefined;
};

const products = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 500 },
];
const productName = "Bag";

console.log(findProductByName(products, productName));
