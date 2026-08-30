// An important concurrency concept:
// Promises start when the async operation is started,
// not when we await them.

const fetchResource = (name, delay) => {
  console.log(`${name} started`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} completed`);
    }, delay);
  });
};

// Sequential start

const sequentialStart = async () => {
  console.time("Sequential Start");

  const user = await fetchResource("User", 2000);

  const posts = await fetchResource("Posts", 2000);

  console.log(user);
  console.log(posts);

  console.timeEnd("Sequential Start");
};

sequentialStart();

// Concurrent start

const concurrentStart = async () => {
  console.time("Concurrent Start");

  const userPromise = fetchResource("User", 2000);

  const postsPromise = fetchResource("Posts", 2000);

  // Both operations have already started.

  const user = await userPromise;

  const posts = await postsPromise;

  console.log(user);
  console.log(posts);

  console.timeEnd("Concurrent Start");
};

concurrentStart();
