// Callback Hell happens when many asynchronous
// operations are deeply nested inside each other.

const loginUser = (callback) => {
  setTimeout(() => {
    console.log("User logged in");

    callback({
      id: 101,
      name: "Foysal",
    });
  }, 1000);
};

const getUserProfile = (userId, callback) => {
  setTimeout(() => {
    console.log("Profile loaded");

    callback({
      userId,
      bio: "Software Engineer",
    });
  }, 1000);
};

const getUserPosts = (userId, callback) => {
  setTimeout(() => {
    console.log("Posts loaded");

    callback([
      {
        id: 1,
        title: "Async JavaScript",
      },
      {
        id: 2,
        title: "Callback Hell",
      },
    ]);
  }, 1000);
};

const getPostComments = (postId, callback) => {
  setTimeout(() => {
    console.log("Comments loaded");

    callback([
      {
        id: 1,
        postId,
        text: "Awesome!",
      },
      {
        id: 2,
        postId,
        text: "Excellent",
      },
    ]);
  }, 1000);
};

const saveActivity = (userId, callback) => {
  setTimeout(() => {
    console.log(`Activity seved for user ${userId}`);
    callback();
  }, 1000);
};

// Callback Hell

loginUser((user) => {
  getUserProfile(user.id, (profile) => {
    getUserPosts(user.id, (posts) => {
      getPostComments(posts[0].id, (comments) => {
        saveActivity(user.id, () => {
          console.log("Everything completed");

          console.log(user);
          console.log(profile);
          console.log(posts);
          console.log(comments);
        });
      });
    });
  });
});
