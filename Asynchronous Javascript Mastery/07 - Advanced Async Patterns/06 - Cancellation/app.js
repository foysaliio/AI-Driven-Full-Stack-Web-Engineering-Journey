// Cancellation prevents unnecessary async work
// from continuing when the result is no longer needed.

let activeController = null;

async function searchUsers(query) {
  // Cancel the previous request.

  if (activeController) {
    activeController.abort();
  }

  activeController = new AbortController();

  try {
    console.log(`Searching for: ${query}`);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${query}`,
      {
        signal: activeController.signal,
      },
    );

    if (!response.ok) {
      throw new Error(`Search failed: ${response.status}`);
    }

    const users = await response.json();

    console.log(`Result for ${query}:`);

    console.log(users);

    return users;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log(`Search cancelled: ${query}`);

      return [];
    }

    throw error;
  }
}

// Imagine a user typing quickly.

searchUsers("F");

searchUsers("Fo");

searchUsers("Foysal");

// Only the newest request is useful.
// Older requests are cancelled.
