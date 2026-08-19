// A type alias can also define an object structure.

type Product = {
  name: string;
  price: number;
  category: string;
};

let product: Product = {
  name: "Laptop",
  price: 75000,
  category: "Electronics",
};

console.log(product);

// Another product using the same type

let anotherProduct: Product = {
  name: "Mouse",
  price: 1500,
  category: "Accessories",
};

console.log(anotherProduct);
