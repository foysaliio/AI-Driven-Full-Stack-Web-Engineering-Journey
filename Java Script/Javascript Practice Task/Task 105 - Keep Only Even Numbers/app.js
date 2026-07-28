// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array

function keepEvenNumbers(numbers) {
  let result = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
}

console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]
