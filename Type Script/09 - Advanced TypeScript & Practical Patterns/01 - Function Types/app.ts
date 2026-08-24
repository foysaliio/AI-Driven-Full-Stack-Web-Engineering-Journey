// Function types define the types of function parameters and return values.

const add = (a: number, b: number): number => {
  return a + b;
};

const greet = (name: string): string => {
  return `Hello, ${name}`;
};

console.log(add(10, 20));
console.log(greet("Foysal"));

// Function type

let calculate: (a: number, b: number) => number;

calculate = add;

console.log(calculate(5, 10));

// Another example

const multiply: (a: number, b: number) => number = (a, b) => {
  return a * b;
};

console.log(multiply(5, 4));
