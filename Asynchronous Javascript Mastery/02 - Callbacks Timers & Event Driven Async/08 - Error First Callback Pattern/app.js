// Error-first callbacks use this convention:
//
// callback(error, data)
//
// If an error occurs:
// callback(error, null)
//
// If the operation succeeds:
// callback(null, data)

const getUser = (userId, callback) => {
  setTimeout(() => {
    if (!userId) {
      callback(new Error("User ID is required"), null);
      return;
    }
    const user = {
      id: userId,
      name: "Foysal",
    };
    callback(null, user);
  }, 1000);
};

getUser(101, (error, user) => {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(user);
});

// Error example

getUser(null, (error, user) => {
  if (error) {
    console.error(`Failed: ${error.message}`);

    return;
  }
  console.log(user);
});

// Another practical example

const divide = (a, b, callback) => {
  setTimeout(() => {
    if (b === 0) {
      callback(new Error("Cannot divide by zero"), null);
      return;
    }

    const result = a / b;
    callback(null, result);
  }, 500);
};

divide(20, 5, (error, result) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(`Result: ${result}`);
});

divide(10, 0, (error, result) => {
  if (error) {
    console.log(`Failed: ${error.message}`);
    return;
  }
  console.log(`Result: ${result}`);
});
