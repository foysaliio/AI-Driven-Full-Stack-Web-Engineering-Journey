// Sequential operations run one after another.
//
// Task 2 starts only after Task 1 finishes.

const wait = (name, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} completed`);

      resolve(name);
    }, delay);
  });
};

async function runSequentially() {
  console.time("Sequential");

  const first = await wait("Task 1", 2000);

  const second = await wait("Task 2", 2000);

  const third = await wait("Task 3", 2000);

  console.log(first);
  console.log(second);
  console.log(third);

  console.timeEnd("Sequential");
}

runSequentially();

// Approximate total time:
//
// Task 1 → 2 seconds
// Task 2 → 2 seconds
// Task 3 → 2 seconds
//
// Total → around 6 seconds

// Concurrent operations can start together.

async function runConcurrently() {
  console.time("Concurrent");

  const firstPromise = wait("Task A", 2000);

  const secondPromise = wait("Task B", 2000);

  const thirdPromise = wait("Task C", 2000);

  const first = await firstPromise;

  const second = await secondPromise;

  const third = await thirdPromise;

  console.log(first);
  console.log(second);
  console.log(third);

  console.timeEnd("Concurrent");
}

runConcurrently();

// Approximate total time:
// around 2 seconds because all tasks started together.
