const filterProducts = (products, action) => {
  if (
    !Array.isArray(products) ||
    (action !== "names" && action !== "cheap" && action !== "firstExpensive")
  ) {
    return "Invalid";
  }
  if (action === "names") {
    const namesArr = products.map((item) => item.name);
    return namesArr;
  } else if (action === "cheap") {
    const cheapItems = products.filter((item) => item.price < 500);
    return cheapItems;
  } else if (action === "firstExpensive") {
    const firstExpensiveItem = products.find((item) => item.price > 1000);
    return firstExpensiveItem;
  }
};

console.log(
  filterProducts(
    [
      { name: "Pen", price: 20 },
      { name: "TV", price: 1500 },
    ],
    "names",
  ),
);
console.log(
  filterProducts(
    [{ name: "Pen", price: 20 }, { name: "Smart Watch", price: 700 }, ,],
    "cheap",
  ),
);
console.log(
  filterProducts(
    [
      { name: "Smart Watch", price: 700 },
      { name: "Bag", price: 1200 },
      { name: "TV", price: 1500 },
    ],
    "firstExpensive",
  ),
);

console.log(filterProducts("x", "names"));
console.log(filterProducts([{ name: "Bag", price: 1200 }], "games"));

// Example Case:::

// const users = [
//   { id: 1, name: "Alice", role: "Admin" },
//   { id: 2, name: "Bob", role: "User" },
//   { id: 3, name: "Charlie", role: "Moderator" }
// ];

// Extract just the names into a clean string array
// const names = users.map(user => user.name);

// console.log(names); // Output: ["Alice", "Bob", "Charlie"]
