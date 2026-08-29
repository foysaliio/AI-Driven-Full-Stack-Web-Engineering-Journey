// DELETE requests are used
// to remove a resource.

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to delete post ${postId}`);
  }

  console.log(`Post ${postId} deleted successfully`);

  return true;
}

deletePost(1)
  .then((success) => {
    console.log(`Deleted: ${success}`);
  })
  .catch((error) => {
    console.log(error.message);
  });

// A DELETE response may not always contain JSON.
//
// Do not automatically call response.json()
// unless the API actually returns JSON.

async function removeUser(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("User deletion failed");
  }

  return {
    success: true,
    userId,
  };
}

removeUser(5).then((result) => {
  console.log(result);
});
