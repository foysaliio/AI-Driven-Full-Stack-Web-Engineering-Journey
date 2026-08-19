// readonly prevents a property from being changed.

interface Product {
  readonly id: number;
  name: string;
  price: number;
}

let product: Product = {
  id: 101,
  name: "Laptop",
  price: 75000,
};

console.log(product);

// These properties can be changed

product.name = "Gaming Laptop";
product.price = 80000;

// This will produce a TypeScript error:

// product.id = 202;

console.log(product);
