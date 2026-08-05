/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/

const getMostExpensiveProduct = (product) => {
  const keys = Object.keys(product);
  let highest = 0;
  let expensiveProductName = "";

  for (let key of keys) {
    if (highest < product[key]) {
      highest = product[key];
      expensiveProductName = key;
    }
  }

  return expensiveProductName;
};

console.log(
  getMostExpensiveProduct({
    pen: 20,
    book: 150,
    bag: 500,
    bat: 750,
    laptop: 30000,
    desktop: 70000,
  }),
);

/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/

let user1 = {
  name: "Foysal",
  address: {
    city: "Comilla",
  },
};
let user2 = {
  name: "Robin",
};

const getCity = (user) => {
  return user.address?.city;
};

console.log(getCity(user1));
console.log(getCity(user2));
