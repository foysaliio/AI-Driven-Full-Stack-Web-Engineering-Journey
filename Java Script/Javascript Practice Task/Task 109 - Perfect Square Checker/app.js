// Input: a number
// Output: true or false
// Returns: a boolean

function isPerfectSquare(num) {
  return Number.isInteger(Math.sqrt(num));
}

console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false
