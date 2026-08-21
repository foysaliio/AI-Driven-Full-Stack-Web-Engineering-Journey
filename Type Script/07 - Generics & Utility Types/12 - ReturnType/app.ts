// ReturnType extracts the return type of a function.

function getUser() {
  return {
    name: "Foysal",
    age: 22,
    email: "foysal@example.com",
  };
}

type User = ReturnType<typeof getUser>;

const user: User = {
  name: "Rahim",
  age: 25,
  email: "rahim@example.com",
};

console.log(user);

// Another example

function getPrice() {
  return 75000;
}

type Price = ReturnType<typeof getPrice>;

const price: Price = 50000;

console.log(price);
