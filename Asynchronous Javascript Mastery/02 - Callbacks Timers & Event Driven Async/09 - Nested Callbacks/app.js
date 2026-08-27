// Sometimes one asynchronous operation
// depends on the result of another operation.

const getUser = (userId, callback) => {
  setTimeout(() => {
    callback({
      id: userId,
      name: "Foysal",
    });
  }, 1000);
};

const getPost = (userId, callback) => {
  setTimeout(() => {
    callback([
      {
        id: 1,
        userId,
        title: "Learning JavaScript",
      },
      {
        id: 2,
        userId,
        title: "Learning TypeScript",
      },
    ]);
  }, 1000);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
    callback([
      {
        id: 1,
        postId,
        message: "Great post!",
      },
      {
        id: 2,
        postId,
        message: "Very helpful",
      },
    ]);
  }, 1000);
};

// Step 1: Get user
getUser(101, (user) => {
  console.log("User:");
  console.log(user);

  // Step 2: Get user's posts
  getPost(user.id, (posts) => {
    console.log("Posts:");
    console.log(posts);

    // Step 3: Get comments from first post
    getComments(posts[0].id, (comments) => {
      console.log("comments:");

      console.log(comments);
    });
  });
});
