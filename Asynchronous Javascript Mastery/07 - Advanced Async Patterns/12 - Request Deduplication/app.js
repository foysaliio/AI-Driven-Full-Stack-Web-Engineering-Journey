// Caching solves repeated requests after data exists.
//
// Request deduplication solves another problem:
// multiple callers requesting the same data
// while the first request is still pending.

const pendingRequests = new Map();

async function fetchUser(userId) {
  const key = `user:${userId}`;

  // Reuse the existing pending Promise.

  if (pendingRequests.has(key)) {
    console.log("Reusing pending request");

    return pendingRequests.get(key);
  }

  console.log("Starting new network request");

  const requestPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return response.json();
    })
    .finally(() => {
      // Remove it when the request settles.

      pendingRequests.delete(key);
    });

  pendingRequests.set(key, requestPromise);

  return requestPromise;
}

// These three callers request
// the same resource almost together.

async function run() {
  const first = fetchUser(1);

  const second = fetchUser(1);

  const third = fetchUser(1);

  const results = await Promise.all([first, second, third]);

  console.log(results);
}

run();

// Ideally only one network request is created.
// All callers share the same pending Promise.
