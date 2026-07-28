// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
  let str = num.toString();
  let total = 1;

  for (let i = 0; i < str.length; i++) {
    const strToNum = Number(str[i]);
    total *= strToNum;
  }

  return total;
}

console.log(productOfDigits(123)); // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0
