// Problem 2: Sum of a Range of Numbers (1 to N)

function sumRange(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumRange(7));
console.log(sumRange(4));