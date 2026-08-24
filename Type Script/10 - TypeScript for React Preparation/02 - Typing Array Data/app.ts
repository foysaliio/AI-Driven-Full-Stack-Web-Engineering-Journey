// Arrays of objects can use reusable types.

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
  },
  {
    id: 2,
    name: "Phone",
    price: 35000,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 3500,
  },
];

products.forEach((product) => {
  console.log(product.name);
  console.log(product.price);
});

const getProductNames = (products: Product[]): string[] => {
  return products.map((product) => product.name);
};

console.log(getProductNames(products));
