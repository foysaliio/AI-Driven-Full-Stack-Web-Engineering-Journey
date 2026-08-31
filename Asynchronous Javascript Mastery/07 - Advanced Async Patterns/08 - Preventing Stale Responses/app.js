// One way to prevent stale responses
// is to track the latest request ID.

let latestRequestId = 0;

let currentProfile = null;

function getUserProfile(userId, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: `User ${userId}`,
      });
    }, delay);
  });
}

async function selectUser(userId, delay) {
  latestRequestId++;

  const requestId = latestRequestId;

  console.log(`Request ${requestId} started`);

  const profile = await getUserProfile(userId, delay);

  // Ignore the result if a newer
  // request was started afterward.

  if (requestId !== latestRequestId) {
    console.log(`Ignoring stale request ${requestId}`);

    return;
  }

  currentProfile = profile;

  console.log("Latest profile:", currentProfile);
}

// Slow request

selectUser(1, 3000);

// Newer faster request

selectUser(2, 1000);

// User 1 can finish later,
// but its result is ignored.
