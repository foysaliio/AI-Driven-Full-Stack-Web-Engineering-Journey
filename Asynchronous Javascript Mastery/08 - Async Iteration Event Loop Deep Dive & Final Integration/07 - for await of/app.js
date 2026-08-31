// for await...of consumes values
// from asynchronous iterables.

async function* generateNumbers() {
  for (let number = 1; number <= 3; number++) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    yield number;
  }
}

async function readNumbers() {
  for await (const number of generateNumbers()) {
    console.log(`Received: ${number}`);
  }

  console.log("Iteration completed");
}

readNumbers();

// for await...of can also consume Promises
// from a synchronous iterable such as an array.

const promises = [
  Promise.resolve("JavaScript"),
  Promise.resolve("TypeScript"),
  Promise.resolve("React"),
];

async function readCourses() {
  for await (const course of promises) {
    console.log(course);
  }
}

readCourses();

// Sequential async processing example

async function processUser(userId) {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  return `Processed user ${userId}`;
}

async function processUsers() {
  const userIds = [101, 102, 103];

  for (const userId of userIds) {
    const result = await processUser(userId);

    console.log(result);
  }
}

processUsers();
