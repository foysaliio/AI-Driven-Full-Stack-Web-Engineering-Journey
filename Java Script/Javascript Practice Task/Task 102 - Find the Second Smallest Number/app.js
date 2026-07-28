// Input: an array of numbers
// Output: the second smallest number
// Returns: a number

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (const num of numbers) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    }
    if (num > smallest && num < secondSmallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
