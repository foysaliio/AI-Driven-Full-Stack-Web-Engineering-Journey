// resolve is used when an operation succeeds.
// reject is used when an operation fails.

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    console.log("Logging in...");

    setTimeout(() => {
      if (email === "foysal@web.com" && password === "foysal123") {
        resolve({
          id: 101,
          name: "Foysal",
          email,
        });
        return;
      }
      reject(new Error("Invalid email or password"));
    }, 1500);
  });
};

const user1 = loginUser("foysal@web.com", "foysal123");
const wrongUser = loginUser("guest@gmail.com", "guest");

user1
  .then((user) => {
    console.log("Login successful");
    console.log(user);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Failed example

wrongUser
  .then((user) => {
    console.log("Login successful");
    console.log(user);
  })
  .catch((error) => {
    console.log(error.message);
  });

// resolve can send different kinds of values.

Promise.resolve("Hello").then((value) => {
  console.log(value);
});

Promise.resolve(100).then((value) => {
  console.log(value);
});

Promise.resolve({
  success: true,
}).then((value) => {
  console.log(value);
});
