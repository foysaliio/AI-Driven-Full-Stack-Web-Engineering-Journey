// A callback is a function passed into another function
// so that the receiving function can execute it.

function greet(name) {
  console.log(`Hello, ${name}`);
}

function processUser(name, callback) {
  console.log("Processing user...");

  callback(name);
}

processUser("Foysal", greet);

// We can also pass an anonymous function directly.

function calculate(a, b, callback) {
  const result = a + b;

  callback(result);
}

calculate(10, 20, function (result) {
  console.log(`Result: ${result}`);
});

// Arrow functions are commonly used as callbacks.

calculate(50, 30, (result) => {
  console.log(`Arrow callback result: ${result}`);
});

// Another practical example

function processOrder(orderName, callback) {
  console.log(`Order received: ${orderName}`);

  callback(orderName);
}

function confirmOrder(orderName) {
  console.log(`${orderName} has been confirmed`);
}

processOrder("Burger", confirmOrder);
