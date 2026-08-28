// catch handles rejected Promises
// and errors from previous Promise steps.

const withdraw = (balance, amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount <= 0) {
        reject(new Error("Amount must be greater then zero"));
        return;
      }

      if (amount > balance) {
        reject(new Error("Insufficient balance"));
        return;
      }

      resolve(balance - amount);
    }, 1000);
  });
};

withdraw(1000, 820)
  .then((remainingBalance) => {
    console.log(`Remaining balance: ${remainingBalance}`);
  })
  .catch((error) => {
    console.error(`Transaction failed: ${error.message}`);
  });

// Error example

withdraw(1000, 1200)
  .then((remainingBalance) => {
    console.log(`Remaining balance: ${remainingBalance}`);
  })
  .catch((error) => {
    console.error(`Transaction failed: ${error.message}`);
  });

// Error example

withdraw(1000, 0)
  .then((remainingBalance) => {
    console.log(`Remaining balance: ${remainingBalance}`);
  })
  .catch((error) => {
    console.error(`Transaction failed: ${error.message}`);
  });

// catch also catches errors thrown inside then.

Promise.resolve("Foysal")
  .then((name) => {
    console.log(name);

    throw new Error("Something failed during processing");
  })
  .catch((error) => {
    console.log(`Caught error: ${error.message}`);
  });
