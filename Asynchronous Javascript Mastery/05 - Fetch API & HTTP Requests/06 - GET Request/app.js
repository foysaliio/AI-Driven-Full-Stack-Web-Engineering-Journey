// GET requests are used to retrieve data.
//
// fetch uses GET by default.

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const users = await response.json();

  console.log("All Users");

  console.log(users);

  users.forEach((user) => {
    console.log(`${user.id}: ${user.name}`);
  });
}

getUsers();

// Get a single resource

async function getPosts(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to load post ${postId}`);
  }

  return response.json();
}

async function showPost() {
  try {
    const post = await getPosts(100);

    console.log(post);

    console.log(`Title: ${post.title}`);
  } catch (error) {
    console.log(error.message);
  }
}

showPost();

// Query parameters

async function getUserPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );

  const posts = await response.json();

  console.log(posts);
}

getUserPosts(8);
