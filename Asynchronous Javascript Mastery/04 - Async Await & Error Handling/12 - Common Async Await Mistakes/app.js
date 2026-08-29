// Mistake 1:
// Using await outside an async function
// in environments where top-level await is not supported.

// const user = await getUser(); // Error in many contexts

// Correct:

async function loadUser() {
  const user = await Promise.resolve({
    name: "Foysal",
  });

  console.log(user);
}

loadUser();

// Mistake 2:
// Forgetting await.

async function getNumber() {
  return 100;
}

async function wrongExample() {
  const number = getNumber();

  console.log(number);

  // Promise
}

wrongExample();

// correct example

async function correctExample() {
  const number = await getNumber();

  console.log(number);

  // 100
}

correctExample();

// Mistake 3:
// Missing error handling.

async function riskyOperation() {
  throw new Error("Something failed");
}

// Avoid leaving rejected Promises unhandled.

riskyOperation().catch((error) => {
  console.log(error.message);
});

// Mistake 4:
// Unnecessary sequential waiting.

const wait = (name, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, delay);
  });
};

const sequentialExample = async () => {
  const first = await wait("First", 1000);

  const second = await wait("Second", 1000);

  console.log(first, second);
};

sequentialExample();

// If two operations are independent,
// they may be able to start together.
// We will learn proper concurrency
// with Promise.all in a later module.

// Mistake 5:
// Mixing then and await unnecessarily.

const mixedStyle = async () => {
  const result = await getNumber();

  return Promise.resolve(result).then((number) => {
    return number * 2;
  });
};

// Cleaner:

const cleanStyle = async () => {
  const result = await getNumber();

  return result * 2;
};

cleanStyle().then((result) => {
  console.log(result);
});
