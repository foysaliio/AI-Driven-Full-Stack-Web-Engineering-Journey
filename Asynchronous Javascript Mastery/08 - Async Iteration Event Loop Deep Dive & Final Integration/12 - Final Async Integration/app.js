// Final integration of the major concepts
// learned throughout the async JavaScript journey.

const BASE_URL = "https://jsonplaceholder.typicode.com";

const cache = new Map();

const pendingRequests = new Map();

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function request(endpoint, { signal, retries = 2 } = {}) {
  const cacheKey = endpoint;

  // Return completed cached data.

  if (cache.has(cacheKey)) {
    console.log(`Cache hit: ${endpoint}`);

    return cache.get(cacheKey);
  }

  // Reuse an identical pending request.

  if (pendingRequests.has(cacheKey)) {
    console.log(`Reusing pending request: ${endpoint}`);

    return pendingRequests.get(cacheKey);
  }

  const requestPromise = (async () => {
    let lastError;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`Request ${endpoint} - Attempt ${attempt}`);

        const response = await fetch(`${BASE_URL}${endpoint}`, {
          signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        cache.set(cacheKey, data);

        return data;
      } catch (error) {
        if (error.name === "AbortError") {
          throw error;
        }

        lastError = error;

        if (attempt < retries) {
          await delay(500 * 2 ** (attempt - 1));
        }
      }
    }

    throw lastError;
  })();

  pendingRequests.set(cacheKey, requestPromise);

  try {
    return await requestPromise;
  } finally {
    pendingRequests.delete(cacheKey);
  }
}

async function loadDashboard() {
  const controller = new AbortController();

  try {
    console.log("Dashboard loading...");

    // These requests are independent,
    // so they can run concurrently.

    const [user, posts, todos] = await Promise.all([
      request("/users/1", {
        signal: controller.signal,
      }),

      request("/posts?userId=1", {
        signal: controller.signal,
      }),

      request("/todos?userId=1", {
        signal: controller.signal,
      }),
    ]);

    console.log(`User: ${user.name}`);

    console.log(`Posts: ${posts.length}`);

    console.log(`Todos: ${todos.length}`);

    return {
      user,
      posts,
      todos,
    };
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Dashboard loading cancelled");

      return null;
    }

    console.log(`Dashboard failed: ${error.message}`);

    throw error;
  } finally {
    console.log("Dashboard request finished");
  }
}

async function startApplication() {
  try {
    const dashboard = await loadDashboard();

    if (!dashboard) {
      return;
    }

    console.log("Application ready");

    console.log(dashboard);
  } catch (error) {
    console.log("Unable to start application");
  }
}

startApplication();
