// Problem 9: Find the Largest Number in an Array

function largestNumberFromArray(arr) {
  let largest = arr[0];
  for (const number of arr) {
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}

console.log(largestNumberFromArray([250, 20, 5, 732, 64, 560]));
