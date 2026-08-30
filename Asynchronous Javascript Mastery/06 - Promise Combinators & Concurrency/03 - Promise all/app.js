// Promise.all waits for all Promises to fulfill.
//
// It returns an array containing
// the results in the original input order.

const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
        name: "Foysal",
      });
    }, 1500);
  });
};

const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Promise",
        },
        {
          id: 2,
          title: "Async Await",
        },
      ]);
    }, 1000);
  });
};

const getNotifications = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["New message", "New course available"]);
    }, 2000);
  });
};

const loadDashboard = async () => {
  console.time("Dashboard");

  const [user, posts, notifications] = await Promise.all([
    getUser(),
    getPosts(),
    getNotifications(),
  ]);

  console.log("User:");
  console.log(user);

  console.log("Posts:");
  console.log(posts);

  console.log("Notifications:");
  console.log(notifications);

  console.timeEnd("Dashboard");
};

loadDashboard();

// Promise.all preserves input order.
//
// Even if the second Promise finishes first,
// results still follow the original array order.

const slowPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow");
  }, 2000);
});

const fastPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fast");
  }, 500);
});

Promise.all([slowPromise, fastPromise]).then((results) => {
  console.log(results);
  // ["Slow", "Fast"]

  const [slow, fast] = results;

  console.log(slow);
  console.log(fast);
});
