// Caching stores previously fetched data
// so repeated requests can reuse it.

const cache = new Map();

async function fetchUser(userId) {
  const cacheKey = `user:${userId}`;

  // Return cached data if available.

  if (cache.has(cacheKey)) {
    console.log("Returning cached user");

    return cache.get(cacheKey);
  }

  console.log("Fetching user from server");

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to load user ${userId}`);
  }

  const user = await response.json();

  cache.set(cacheKey, user);

  return user;
}

// Usage

async function run() {
  const first = await fetchUser(1);

  console.log(first.name);

  // This call can reuse cached data.

  const second = await fetchUser(1);

  console.log(second.name);
}

run();

// Cache invalidation

function clearUserCache(userId) {
  cache.delete(`user:${userId}`);
}

// Clear everything

function clearCache() {
  cache.clear();
}
