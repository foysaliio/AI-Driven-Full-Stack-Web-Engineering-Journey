// Returning a Promise from then makes
// the next then wait for that Promise to settle.

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

const getPosts = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          userId,
          title: "Promise",
        },
        {
          id: 2,
          userId,
          title: "Async Await",
        },
      ]);
    }, 1000);
  });
};

const getComments = (postId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          postId,
          text: "Great post",
        },
        {
          id: 2,
          postId,
          text: "Very helpful",
        },
      ]);
    }, 1000);
  });
};

getUser(101)
  .then((user) => {
    console.log(user);

    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);

    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Incorrect pattern:
// Forgetting to return the Promise.

getUser(101)
  .then((user) => {
    getPosts(user.id);

    // The next then does not receive
    // the posts Promise result.
  })
  .then((posts) => {
    console.log(posts);

    // undefined
  });
