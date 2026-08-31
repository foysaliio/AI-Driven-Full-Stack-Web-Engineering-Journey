// A retry pattern runs an asynchronous operation again
// when the previous attempt fails.

function unstableRequest() {
  return new Promise((resolve, reject) => {
    const succeeded = Math.random() > 0.5;

    setTimeout(() => {
      if (succeeded) {
        resolve("Request completed successfully");

        return;
      }

      reject(new Error("Temporary request failure"));
    }, 500);
  });
}

// Basic retry helper

async function retry(operation, maxAttempts) {
  let lastError;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`Attempt ${attempt} of ${maxAttempts}`);

      const result = await operation();

      return result;
    } catch (error) {
      lastError = error;

      console.log(`Attempt ${attempt} failed: ${error.message}`);
    }
  }

  throw lastError;
}

// Usage

async function runRequest() {
  try {
    const result = await retry(unstableRequest, 3);

    console.log(result);
  } catch (error) {
    console.log(`All attempts failed: ${error.message}`);
  }
}

runRequest();

// Important:
// Do not retry every possible error blindly.
//
// Good retry candidates:
// temporary network failures
// service unavailable errors
// rate limiting in some cases
//
// Bad retry candidates:
// invalid password
// validation error
// unauthorized request
