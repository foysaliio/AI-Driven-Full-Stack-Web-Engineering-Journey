// Promise.race can create a timeout pattern.

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Request timed out after ${delay}ms`));
    }, delay);
  });
}

async function fetchWithTimeout(url, timeoutMs) {
  const fetchPromise = fetch(url);

  const response = await Promise.race([fetchPromise, timeout(timeoutMs)]);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

async function loadUser() {
  try {
    const user = await fetchWithTimeout(
      "https://jsonplaceholder.typicode.com/users/1",
      5000,
    );

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

loadUser();

// Generic timeout wrapper

function withTimeout(promise, delay) {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Operation timed out"));
    }, delay);
  });

  return Promise.race([promise, timeoutPromise]);
}

withTimeout(
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation completed");
    }, 1000);
  }),
  3000,
)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
