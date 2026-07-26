// Problem 11: Sum and Average of an Array

function generateAvg(arr) {
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }

  let avg = sum / arr.length;

  return avg;
}

console.log(generateAvg([5, 10, 15]));
console.log(generateAvg([1, 2, 3]));
console.log(generateAvg([3, 23, 10]));
