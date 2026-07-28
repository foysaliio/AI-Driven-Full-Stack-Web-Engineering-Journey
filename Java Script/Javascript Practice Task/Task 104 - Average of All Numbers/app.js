// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number

function averageOfArray(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }

  const ave = total / numbers.length;

  return ave;
}

console.log(averageOfArray([2, 4, 6])); // Expected: 4
