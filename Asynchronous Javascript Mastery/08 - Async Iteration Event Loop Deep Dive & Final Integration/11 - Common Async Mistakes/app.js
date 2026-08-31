// Mistake 1:
// Forgetting await.

async function getUser() {
  return {
    id: 1,
    name: "Foysal",
  };
}

async function exampleOne() {
  const wrongUser = getUser();

  console.log(wrongUser);

  // Promise

  const correctUser = await getUser();

  console.log(correctUser);
}

exampleOne();

// Mistake 2:
// Using async forEach and expecting it to wait.

const numbers = [1, 2, 3];

numbers.forEach(async (number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  console.log(number);
});

console.log("forEach does not wait for async callbacks");

// Better sequential approach

async function processSequentially() {
  for (const number of numbers) {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });

    console.log(number);
  }

  console.log("Sequential processing completed");
}

processSequentially();

// Better concurrent approach

async function processConcurrently() {
  await Promise.all(
    numbers.map(async (number) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });

      console.log(number);
    }),
  );

  console.log("Concurrent processing completed");
}

processConcurrently();

// Mistake 3:
// Catching an error and hiding it accidentally.

async function dangerousOperation() {
  throw new Error("Database request failed");
}

async function badErrorHandling() {
  try {
    await dangerousOperation();
  } catch (error) {
    console.log(error.message);

    // Error is swallowed here.
  }
}

// Sometimes we should rethrow.

async function betterErrorHandling() {
  try {
    await dangerousOperation();
  } catch (error) {
    console.log("Logging error locally");

    throw error;
  }
}

// Mistake 4:
// Using Promise.all for dependent operations.
//
// If getPosts requires user.id:
//
// const [user, posts] = await Promise.all([
//   getUser(),
//   getPosts(user.id), // user does not exist yet
// ]);
//
// Correct:
//
// const user = await getUser();
// const posts = await getPosts(user.id);

// Mistake 5:
// Assuming Promise.race cancels losing Promises.
//
// It does not.
//
// Use AbortController when actual
// Fetch cancellation is required.
