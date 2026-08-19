// Interfaces can also describe function structures.

interface Greet {
  (name: string): string;
}

const greet: Greet = (name) => {
  return `Hello, ${name}`;
};

console.log(greet("Foysal"));

// Another function interface

interface Calculator {
  (firstNumber: number, secondNumber: number): number;
}

const add: Calculator = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

const multiply: Calculator = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

console.log(add(10, 20));
console.log(multiply(10, 20));
