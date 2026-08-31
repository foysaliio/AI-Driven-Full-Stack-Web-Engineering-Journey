// A real request should not always be allowed
// to wait forever.
//
// AbortController can cancel a fetch request
// after a timeout.

async function fetchWithTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Usage

async function loadUser() {
  try {
    const user = await fetchWithTimeout(
      "https://jsonplaceholder.typicode.com/users/1",
      3000,
    );

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

loadUser();

// This version is stronger than simply racing
// fetch against a timeout Promise because
// the underlying fetch request is actually aborted.
