// In a type position, typeof can create a type
// from an existing variable.

const user = {
  name: "Foysal",
  age: 22,
  isStudent: true,
};

type User = typeof user;

const anotherUser: User = {
  name: "Rahim",
  age: 25,
  isStudent: false,
};

console.log(anotherUser);

// Another example

const product = {
  name: "Laptop",
  price: 75000,
};

type Product = typeof product;

const anotherProduct: Product = {
  name: "Mouse",
  price: 1500,
};

console.log(anotherProduct);
