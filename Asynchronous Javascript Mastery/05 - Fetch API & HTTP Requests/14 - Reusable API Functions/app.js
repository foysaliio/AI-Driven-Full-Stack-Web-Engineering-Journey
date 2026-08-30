// Reusable API helpers prevent us from repeating
// the same fetch and error handling logic.

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function request(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,

    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  // Some responses such as 204 may have no body.

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

// GET

async function getUsers() {
  return request("/users");
}

// GET single resource

async function getUser(userId) {
  return request(`/users/${userId}`);
}

// POST

async function createPost(post) {
  return request("/posts", {
    method: "POST",

    body: JSON.stringify(post),
  });
}

// PATCH

async function updatePost(postId, updates) {
  return request(`/posts/${postId}`, {
    method: "PATCH",

    body: JSON.stringify(updates),
  });
}

// DELETE

async function deletePost(postId) {
  return request(`/posts/${postId}`, {
    method: "DELETE",
  });
}

// Using the API functions

async function runApplication() {
  try {
    const users = await getUsers();

    console.log("Users:");

    console.log(users);

    const user = await getUser(1);

    console.log("Single User:");

    console.log(user);

    const newPost = await createPost({
      title: "Reusable Fetch",
      body: "Building API helpers",
      userId: 1,
    });

    console.log("Created Post:");

    console.log(newPost);

    const updatedPost = await updatePost(1, {
      title: "Updated Title",
    });

    console.log("Updated Post:");

    console.log(updatedPost);

    await deletePost(1);

    console.log("Delete request completed");
  } catch (error) {
    console.error(`Application error: ${error.message}`);
  }
}

runApplication();
