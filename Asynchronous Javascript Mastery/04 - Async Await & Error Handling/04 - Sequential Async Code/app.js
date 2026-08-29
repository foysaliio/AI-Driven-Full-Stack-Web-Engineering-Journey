// Sequential async operations run one after another.

const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
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
          title: "JavaScript",
        },
        {
          id: 2,
          userId,
          title: "TypeScript",
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
          text: "very helpful",
        },
      ]);
    }, 1000);
  });
};

const loadUserData = async () => {
  const user = await getUser();

  console.log("User:");

  console.log(user);

  const posts = await getPosts(user.id);

  console.log("Posts:");

  console.log(posts);

  const comments = await getComments(posts[0].id);

  console.log("Comments:");

  console.log(comments);
};

loadUserData();
