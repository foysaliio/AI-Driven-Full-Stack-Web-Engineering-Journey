// Polling means repeatedly checking
// for updated data after a delay.

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

// Simulated job status

let statusCheckCount = 0;

async function getJobStatus() {
  statusCheckCount++;

  console.log(`Checking status: ${statusCheckCount}`);

  if (statusCheckCount < 4) {
    return {
      status: "processing",
    };
  }

  return {
    status: "completed",
    result: "Video processing finished",
  };
}

// Poll until the job is completed.

async function pollJobStatus(intervalMs = 1000, maxAttempts = 10) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const result = await getJobStatus();

    console.log(result.status);

    if (result.status === "completed") {
      return result;
    }

    if (result.status === "failed") {
      throw new Error("Background job failed");
    }

    await delay(intervalMs);
  }

  throw new Error("Polling exceeded maximum attempts");
}

// Usage

async function startPolling() {
  try {
    const result = await pollJobStatus();

    console.log(result.result);
  } catch (error) {
    console.log(error.message);
  }
}

startPolling();
