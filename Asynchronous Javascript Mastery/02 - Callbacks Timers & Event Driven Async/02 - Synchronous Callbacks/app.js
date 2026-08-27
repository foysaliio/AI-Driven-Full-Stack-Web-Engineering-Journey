// A synchronous callback executes immediately
// during the current synchronous flow.

const numbers = [10, 20, 30, 40];

numbers.forEach((number) => {
  console.log(number);
});

console.log("forEach completed");

// map also uses a synchronous callback.

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

// filter uses a synchronous callback.

const largeNumbers = numbers.filter((number) => {
  return number >= 30;
});

console.log(largeNumbers);

// Custom synchronous callback example

function processNumber(number, callback) {
  console.log("Processing started");

  const result = callback(number);

  console.log(`Processed result: ${result}`);

  console.log("Processing finished");
}

processNumber(5, (number) => {
  return number * number;
});

// Output:
//
// Processing started
// Processed result: 25
// Processing finished
