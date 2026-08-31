// A real application often combines
// multiple asynchronous concepts.

const API_URL = "https://jsonplaceholder.typicode.com";

const cache = new Map();

let activeController = null;

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function fetchWithRetry(
  url,
  { retries = 3, retryDelay = 500, signal } = {},
) {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error.name === "AbortError") {
        throw error;
      }

      lastError = error;

      if (attempt < retries) {
        console.log(`Retrying request: ${attempt}`);

        await delay(retryDelay);
      }
    }
  }

  throw lastError;
}

async function getUser(userId) {
  const cacheKey = `user:${userId}`;

  if (cache.has(cacheKey)) {
    console.log("Using cached user");

    return cache.get(cacheKey);
  }

  if (activeController) {
    activeController.abort();
  }

  activeController = new AbortController();

  const user = await fetchWithRetry(`${API_URL}/users/${userId}`, {
    retries: 3,
    signal: activeController.signal,
  });

  cache.set(cacheKey, user);

  return user;
}

async function showUser(userId) {
  try {
    console.log("Loading user...");

    const user = await getUser(userId);

    console.log(`Name: ${user.name}`);

    console.log(`Email: ${user.email}`);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Old request cancelled");

      return;
    }

    console.log(`Failed: ${error.message}`);
  }
}

showUser(1);
