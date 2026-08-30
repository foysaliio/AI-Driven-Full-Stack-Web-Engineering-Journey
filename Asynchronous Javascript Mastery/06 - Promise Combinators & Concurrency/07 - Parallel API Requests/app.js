// Independent API requests can often
// be fetched concurrently.

const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchJson = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
};

// Slower sequential version

async function loadPageSequentially() {
  console.time("Sequential API");

  const users = await fetchJson("/users");

  const posts = await fetchJson("/posts");

  const comments = await fetchJson("/comments");

  console.log(users.length);
  console.log(posts.length);
  console.log(comments.length);

  console.timeEnd("Sequential API");
}

// Concurrent version

async function loadPageConcurrently() {
  console.time("Concurrent API");

  try {
    const [users, posts, comments] = await Promise.all([
      fetchJson("/users"),
      fetchJson("/posts"),
      fetchJson("/comments"),
    ]);

    console.log(`Users: ${users.length}`);

    console.log(`Posts: ${posts.length}`);

    console.log(`Comments: ${comments.length}`);
  } catch (error) {
    console.log(`Page loading failed: ${error.message}`);
  }

  console.timeEnd("Concurrent API");
}

loadPageConcurrently();

// Use concurrent requests only when
// the requests do not depend on each other.
