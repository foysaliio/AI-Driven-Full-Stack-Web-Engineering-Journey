// Function composition allows us to build
// larger async workflows from smaller functions.

const authenticateUser = async (email, password) => {
  if (email !== "foysal@gmail.com" || password !== "foysal123") {
    throw new Error("Authentication failed");
  }
  return {
    id: 101,
    name: "Foysal",
  };
};

const loadProfile = async (userId) => {
  return {
    userId,
    bio: "Software Engineering Learner",
  };
};

const loadNotifications = async (userId) => {
  return [
    {
      id: 1,
      userId,
      message: "Welcome back",
    },
    {
      id: 2,
      userId,
      message: "New course available",
    },
  ];
};

const buildDashboard = async (email, password) => {
  const user = await authenticateUser(email, password);

  const profile = await loadProfile(user.id);

  const notifications = await loadNotifications(user.id);

  return {
    user,
    profile,
    notifications,
  };
};

const startApplication = async () => {
  try {
    console.log("Starting application...");

    const dashboard = await buildDashboard("foysal@gmail.com", "foysal123");

    console.log("Dashboard ready:");

    console.log(dashboard);
  } catch (error) {
    console.log(`Application failed: ${error.message}`);
  }
};

startApplication();
