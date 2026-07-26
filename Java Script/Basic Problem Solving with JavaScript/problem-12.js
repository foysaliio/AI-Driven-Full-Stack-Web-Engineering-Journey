// Problem 12: Filter Numbers Greater Than a Value

function getFilteredArray(arr, value) {
  let filteredArray = [];

  for (const number of arr) {
    if (number > value) {
      filteredArray.push(number);
    }
  }

  return filteredArray;
}

console.log(getFilteredArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 80));
console.log(getFilteredArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10));
