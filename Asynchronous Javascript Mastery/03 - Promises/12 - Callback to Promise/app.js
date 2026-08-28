// Old callback-based function

function getUserCallback(userId, callback) {
  setTimeout(() => {
    if (!userId) {
      callback(new Error("User ID is required"), null);

      return;
    }

    callback(null, {
      id: userId,
      name: "Foysal",
      email: "foysal@example.com",
    });
  }, 1000);
}

// Callback usage

getUserCallback(101, (error, user) => {
  if (error) {
    console.log(error.message);

    return;
  }

  console.log(user);
});

// Convert the callback API into a Promise.

function getUser(userId) {
  return new Promise((resolve, reject) => {
    getUserCallback(userId, (error, user) => {
      if (error) {
        reject(error);

        return;
      }

      resolve(user);
    });
  });
}

// Promise usage

getUser(101)
  .then((user) => {
    console.log("Promise-based user:");

    console.log(user);

    return user.name;
  })
  .then((name) => {
    console.log(`Welcome, ${name}`);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Failed Promise example

getUser(null)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(`Failed: ${error.message}`);
  });
