// Problem 1: Check if a Number is Even or Odd

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}

console.log(checkEvenOrOdd(25));
console.log(checkEvenOrOdd(26));
console.log(checkEvenOrOdd(501));