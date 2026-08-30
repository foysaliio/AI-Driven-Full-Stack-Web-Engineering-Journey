// AbortController allows us to cancel
// an ongoing fetch request.

const controller = new AbortController();

console.log(controller);

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    console.log(users);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request was cancelled");

      return;
    }

    console.log(`Request failed: ${error.message}`);
  }
}

loadUsers();

// Cancel the request.

controller.abort();

// Practical search example

let currentController = null;

async function searchUsers(query) {
  // Cancel the previous request.

  if (currentController) {
    currentController.abort();
  }

  currentController = new AbortController();

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${query}`,
      {
        signal: currentController.signal,
      },
    );

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const users = await response.json();

    console.log(users);

    return users;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Previous search request cancelled");

      return [];
    }

    throw error;
  }
}
