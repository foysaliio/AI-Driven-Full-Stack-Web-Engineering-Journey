/*
  Problem: Filtered Cart Total (Chaining filter -> map -> reduce)
  getExpensiveItemsTotal(cart, minPrice) — from the cart, keep only
  items priced at or above minPrice, then calculate the total cost
  (price * qty) of just those items — all in ONE chained expression.

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Headphone", price: 800, qty: 1 },
      { name: "Notebook", price: 50, qty: 2 },
      { name: "Watch", price: 1500, qty: 1 },
    ]
    minPrice = 500

  Output:
    2300   (800*1 + 1500*1)

  Build it live, one step at a time (uncomment one block, log, then move on):
    1. filter alone        -> just the expensive items
    2. filter + map        -> price*qty for each expensive item
    3. filter + map + reduce -> single total number
*/

let getExpensiveItemsTotal = (cart, minPrice) => {
  let total = cart
    .filter((product) => product.price >= minPrice)
    .map((product) => product.price * product.qty)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return total;
};

let cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Headphone", price: 800, qty: 1 },
  { name: "Notebook", price: 50, qty: 2 },
  { name: "Watch", price: 1500, qty: 2 },
];

console.log(getExpensiveItemsTotal(cart, 500));
