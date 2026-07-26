// Problem 15: Return All Even Numbers, Then Their Sum

let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];

function getEvenNumbers(arr) {
  let evenNumbers = [];
  for (const number of arr) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

function getSum(arr) {
  let sum = 0;
  for (let key of arr) {
    console.log(key);
    sum += key;
  }

  return sum;
}

let evenNumbers = getEvenNumbers(arr);
let sum = getSum(evenNumbers);
console.log("sum: ", sum);
