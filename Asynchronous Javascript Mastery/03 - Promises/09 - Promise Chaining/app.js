// Promise chaining creates a sequence
// of asynchronous or synchronous transformations.

const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "Foysal",
      });
    }, 1000);
  });
};

const getPosts = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user,
        posts: [
          {
            id: 1,
            title: "JavaScript",
          },
          {
            id: 2,
            title: "TypeScript",
          },
        ],
      });
    }, 1000);
  });
};

const getFirstPost = (data) => {
  return data.posts[0];
};

getUser(101)
  .then((user) => {
    console.log("User loaded");

    console.log(user);

    return getPosts(user);
  })
  .then((data) => {
    console.log("Posts loaded");

    console.log(data.posts);

    return getFirstPost(data);
  })
  .then((post) => {
    console.log("First post");

    console.log(post);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Compare with callback nesting:
//
// getUser((user) => {
//   getPosts(user, (posts) => {
//     getComments(posts[0], (comments) => {
//       ...
//     });
//   });
// });
