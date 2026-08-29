// PUT is commonly used to replace
// the complete representation of a resource.

async function replacePost(postId) {
  const updatedPost = {
    id: postId,
    title: "Completely updated post",
    body: "This represents the full updated resource",
    userId: 1,
  };

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    },
  );

  if (!response.ok) {
    throw new Error("PUT request failed");
  }
  return response.json();
}

replacePost(1)
  .then((post) => {
    console.log("PUT result:");

    console.log(post);
  })
  .catch((error) => {
    console.log(error.message);
  });

// PATCH is commonly used
// to update only selected fields.

async function updatePostTitle(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Updated title only",
      }),
    },
  );

  if (!response.ok) {
    throw new Error("PATCH request failed");
  }

  return response.json();
}

updatePostTitle(1)
  .then((post) => {
    console.log("PATCH result:");
    console.log(post);
  })
  .catch((error) => {
    console.log(error.message);
  });
