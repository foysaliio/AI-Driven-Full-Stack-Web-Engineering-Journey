// Input: an array of numbers
// Output: array with duplicates removed
// Returns: an array

function removeDuplicates(numbers) {
  let unique = [];
  for (const num of numbers) {
    if (unique.includes(num)) {
      continue;
    } else {
      unique.push(num);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]
