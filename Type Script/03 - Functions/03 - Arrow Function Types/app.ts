// Arrow functions can also have typed parameters and return types.

const addNumbers = (firstNumber: number, secondNumber: number): number => {
  return firstNumber + secondNumber;
};

console.log(addNumbers(10, 20));

// Short arrow function

const multiply = (firstNumber: number, secondNumber: number): number =>
  firstNumber * secondNumber;

console.log(multiply(5, 4));

// String example

const greet = (name: string): string => {
  return `Hello, ${name}`;
};

console.log(greet("Foysal"));
