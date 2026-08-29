// POST requests are commonly used
// to create new resources.

async function createPost() {
  const newPost = {
    title: "Learning Fetch API",
    body: "POST requests are important",
    userId: 1,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error(`Failed to create post: ${response.status}`);
  }

  const createPost = await response.json();

  console.log("Created post:");

  console.log(createPost);

  return createPost;
}

createPost().catch((error) => {
  console.log(error.message);
});

// Practical user registration example

async function registerUser(user) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
}

registerUser({
  name: "Foysal",
  email: "foysal77@gmail.com",
})
  .then((user) => {
    console.log("Registered:");

    console.log(user);
  })
  .catch((error) => {
    console.log(error.message);
  });
