// A function type can be stored inside a type alias.

type Calculator = (firstNumber: number, secondNumber: number) => number;

const add: Calculator = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

const multiply: Calculator = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

console.log(add(10, 20));
console.log(multiply(10, 20));

// Another example

type Greet = (name: string) => string;

const greet: Greet = (name) => {
  return `Hello ${name}`;
};

console.log(greet("Foysal"));
