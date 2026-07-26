// Problem 10: Find the Smallest Number in an Array

function smallestNumberFromArray(arr) {
  let smallest = arr[0];
  for (const number of arr) {
    if (number < smallest) {
      smallest = number;
    }
  }
  return smallest;
}

console.log(smallestNumberFromArray([250, 20, 5, 732, 64, 2, 560]));
