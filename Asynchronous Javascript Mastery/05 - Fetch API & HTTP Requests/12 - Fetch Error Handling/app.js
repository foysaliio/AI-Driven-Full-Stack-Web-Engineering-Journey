// Important:
// fetch does NOT automatically reject
// just because the server responds with 404 or 500.
//
// We should check response.ok manually.

async function getPost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const post = await response.json();

    console.log(post);

    return post;
  } catch (error) {
    console.error(`Request failed: ${error.message}`);
    throw error;
  }
}

getPost(1).catch(() => {
  console.log("Could not load the post");
});

// Network failure example

async function loadInvalidServer() {
  try {
    const response = await fetch("https://invalid-example-domain.test/users");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(`Network or request error: ${error.message}`);
  }
}

loadInvalidServer();

// Reusable error pattern

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
  return response.json();
}
