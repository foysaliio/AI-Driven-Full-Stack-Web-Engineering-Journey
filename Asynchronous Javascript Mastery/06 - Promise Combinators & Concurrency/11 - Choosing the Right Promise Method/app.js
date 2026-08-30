// Different Promise combinators solve
// different asynchronous problems.

const success = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

function failure(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, delay);
  });
}

// 1. Promise.all
// Use when every operation must succeed.

async function exampleAll() {
  try {
    const results = await Promise.all([
      success("User", 500),
      success("Posts", 700),
      success("Comments", 900),
    ]);

    console.log(results);
  } catch (error) {
    console.log(error.message);
  }
}

exampleAll();

// 2. Promise.allSettled
// Use when every outcome matters.

async function exampleAllSettled() {
  const results = await Promise.allSettled([
    success("Email", 500),
    failure("Payment service failed", 600),
    success("Notification", 700),
  ]);

  console.log(results);
}

exampleAllSettled();

// 3. Promise.race
// Use when the first settled result matters.

async function exampleRace() {
  try {
    const result = await Promise.race([
      success("Server A", 1500),
      success("Server B", 500),
    ]);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

exampleRace();

// 4. Promise.any
// Use when we need the first successful result.

async function exampleAny() {
  try {
    const result = await Promise.any([
      failure("Server A failed", 300),

      success("Server B connected", 800),

      success("Server C connected", 1200),
    ]);

    console.log(result);
  } catch (error) {
    console.log("Every operation failed");
  }
}

exampleAny();
