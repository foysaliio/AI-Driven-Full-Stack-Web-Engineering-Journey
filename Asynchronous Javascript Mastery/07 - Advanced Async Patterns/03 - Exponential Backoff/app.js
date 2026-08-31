// Exponential backoff increases the waiting time
// after every failed attempt.
//
// Example:
//
// Attempt 1 fails → wait 500ms
// Attempt 2 fails → wait 1000ms
// Attempt 3 fails → wait 2000ms
// Attempt 4 fails → wait 4000ms

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function retryWithBackoff(
  operation,
  { maxAttempts = 5, initialDelay = 500 } = {},
) {
  let lastError;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`Attempt ${attempt}`);

      return await operation();
    } catch (error) {
      lastError = error;

      if (attempt === maxAttempts) {
        break;
      }

      const delayTime = initialDelay * 2 ** (attempt - 1);

      console.log(`Failed: ${error.message}`);

      console.log(`Retrying after ${delayTime}ms`);

      await delay(delayTime);
    }
  }

  throw lastError;
}

// Simulated API

let attempts = 0;

async function unstableApi() {
  attempts++;

  if (attempts < 4) {
    throw new Error("Service temporarily unavailable");
  }

  return {
    message: "Service recovered",
  };
}

// Usage

async function start() {
  try {
    const result = await retryWithBackoff(unstableApi, {
      maxAttempts: 5,
      initialDelay: 500,
    });

    console.log(result);
  } catch (error) {
    console.log(`Final failure: ${error.message}`);
  }
}

start();
