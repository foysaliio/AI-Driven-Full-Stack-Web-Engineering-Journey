// try...catch handles errors
// from awaited rejected Promises.

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "foysal@web.com" && password === "foysal123") {
        resolve({
          id: 101,
          name: "Foysal",
        });
        return;
      }

      reject(new Error("Invalid email or password"));
    }, 1000);
  });
};

async function login() {
  try {
    console.log("Logging in...");

    const user = await loginUser("foysal@web.com", "foysal123");

    console.log(user);
  } catch (error) {
    console.log(`Login failed: ${error.message}`);
  }
}

login();

// Failed example

async function failedLogin() {
  try {
    const user = await loginUser("hossien@gmail.com", "foysal123");

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
failedLogin();
