// Promise.all rejects when any input Promise rejects.

function task(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        console.log(`${name} failed`);

        reject(new Error(`${name} error`));

        return;
      }

      console.log(`${name} completed`);

      resolve(`${name} result`);
    }, delay);
  });
}

async function runTasks() {
  try {
    const results = await Promise.all([
      task("Task A", 1000),
      task("Task B", 500, true),
      task("Task C", 2000),
    ]);

    console.log(results);
  } catch (error) {
    console.log(`Promise.all failed: ${error.message}`);
  }
}

runTasks();

// Important:
//
// Promise.all rejecting does NOT automatically
// cancel the other operations.
//
// Task C can still continue running
// even after Task B causes Promise.all to reject.

// Compare with allSettled.

async function inspectEveryTask() {
  const results = await Promise.allSettled([
    task("Service A", 500),
    task("Service B", 700, true),
    task("Service C", 900),
  ]);

  console.log(results);
}

inspectEveryTask();
