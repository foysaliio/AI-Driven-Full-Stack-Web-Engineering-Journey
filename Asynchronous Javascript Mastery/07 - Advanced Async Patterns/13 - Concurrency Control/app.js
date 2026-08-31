// Sometimes we want concurrency,
// but we do not want every task
// to run at the same time.
//
// This helper limits the number
// of simultaneously running tasks.

function createTask(id, delay) {
  return async function () {
    console.log(`Task ${id} started`);

    await new Promise((resolve) => {
      setTimeout(resolve, delay);
    });

    console.log(`Task ${id} completed`);

    return id;
  };
}

async function runWithLimit(tasks, limit) {
  const results = new Array(tasks.length);

  let nextTaskIndex = 0;

  async function worker() {
    while (true) {
      const currentIndex = nextTaskIndex;

      nextTaskIndex++;

      if (currentIndex >= tasks.length) {
        return;
      }

      results[currentIndex] = await tasks[currentIndex]();
    }
  }

  const workerCount = Math.min(limit, tasks.length);

  const workers = Array.from(
    {
      length: workerCount,
    },
    () => worker(),
  );

  await Promise.all(workers);

  return results;
}

// Create several tasks.

const tasks = [
  createTask(1, 1500),
  createTask(2, 1000),
  createTask(3, 2000),
  createTask(4, 800),
  createTask(5, 1200),
  createTask(6, 500),
];

// Only two tasks are allowed
// to run at the same time.

runWithLimit(tasks, 2).then((results) => {
  console.log("All results:");

  console.log(results);
});

// Instead of:
//
// 6 tasks running together
//
// We get:
//
// Maximum 2 running
// at the same time.
