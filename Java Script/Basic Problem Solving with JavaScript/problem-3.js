// Problem 3: Factorial of a Number

function getFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

let factorialOfFour = getFactorial(4);
let factorialOfThree = getFactorial(3);

console.log(factorialOfFour);
console.log(factorialOfThree);
