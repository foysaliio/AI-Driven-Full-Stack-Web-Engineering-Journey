/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

function calculateTotal(discount, ...prices) {
  console.log(discount, prices);
  let total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  let discountAmount = (total * discount) / 100;
  console.log(discountAmount);
  let totalAfterDiscountApply = total - discountAmount;
  return totalAfterDiscountApply;
}

console.log(calculateTotal(10, 100, 200, 50, 300));

/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

let newArr = [...new Set(mergedArr)];
// let newArr = Array.from(new Set(mergedArr));

console.log(newArr);
