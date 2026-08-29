// Async functions can call and await
// other async functions.

const getUser = async () => {
  return {
    id: 101,
    name: "Foysal",
  };
};

const getUserPosts = async (userId) => {
  return [
    {
      id: 1,
      userId,
      title: "Async JavaScript",
    },
    {
      id: 2,
      userId,
      title: "Promises",
    },
  ];
};

const loadUserWithPosts = async () => {
  const user = await getUser();

  const posts = await getUserPosts(user.id);

  return {
    user,
    posts,
  };
};

const showUserDashboard = async () => {
  try {
    const dashboard = await loadUserWithPosts();

    console.log(`User: ${dashboard.user.name}`);

    console.log(`Posts:`);

    dashboard.posts.forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.log(error.message);
  }
};

showUserDashboard();
