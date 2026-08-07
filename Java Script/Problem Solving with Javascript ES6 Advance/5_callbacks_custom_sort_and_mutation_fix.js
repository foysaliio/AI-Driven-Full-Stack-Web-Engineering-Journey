/*
  Problem 1: Custom Sort — Descending Numbers
  sortDescending(nums) — sort an array of numbers from largest to
  smallest, using a comparator callback passed to .sort(). Return a
  NEW array — don't mutate the original nums array.

  Input:
    [1, 10, 2, 25, 3]

  Output:
    [25, 10, 3, 2, 1]
*/

const sortDescending = (nums) => {
  const nums2 = [...nums];

  const sortedNums = nums2.sort((a, b) => {
    // return a-b; //ascending order
    return b - a; //descending order
  });
  return sortedNums;
};

const numbers = [1, 10, 2, 25, 3];
console.log(sortDescending(numbers));
