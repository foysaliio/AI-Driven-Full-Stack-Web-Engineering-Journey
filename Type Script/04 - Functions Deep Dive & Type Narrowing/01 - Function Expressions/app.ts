// A function expression stores a function inside a variable.

const greet = function (name: string): string {
  return `Hello, ${name}`;
};

console.log(greet("Foysal"));

// Function expression with numbers

const add = function (firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
};

console.log(add(10, 20));
