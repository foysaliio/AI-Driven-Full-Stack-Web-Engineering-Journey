// A callback function is a function passed as an argument to another function.

const processNumber = (
  number: number,
  callback: (value: number) => number,
): number => {
  return callback(number);
};

const double = (value: number): number => {
  return value * 2;
};

const square = (value: number): number => {
  return value * value;
};

console.log(processNumber(5, double));

console.log(processNumber(5, square));

// Another Example

const processNumber2 = (
  callback: (value1: number, value2: number) => number,
) => {
  return callback(50, 20);
};

const addition = (number1: number, number2: number): number => {
  return number1 + number2;
};

const subtraction = (number1: number, number2: number): number => {
  return number1 - number2;
};

console.log(processNumber2(addition));
console.log(processNumber2(subtraction));
