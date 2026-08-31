// Retrying immediately can put unnecessary pressure
// on a server.
//
// A delay between attempts is usually better.

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

// Simulated request

let requestCount = 0;

async function fetchData() {
  requestCount++;

  console.log(`Server request number: ${requestCount}`);

  if (requestCount < 3) {
    throw new Error("Server temporarily unavailable");
  }

  return {
    success: true,
    data: "User data",
  };
}

// Retry with a fixed delay

async function retryWithDelay(operation, maxAttempts, delayMs) {
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

      console.log(`Waiting ${delayMs}ms before retrying...`);

      await delay(delayMs);
    }
  }

  throw lastError;
}

// Usage

async function loadData() {
  try {
    const result = await retryWithDelay(fetchData, 5, 1000);

    console.log(result);
  } catch (error) {
    console.log(`Request failed permanently: ${error.message}`);
  }
}

loadData();
