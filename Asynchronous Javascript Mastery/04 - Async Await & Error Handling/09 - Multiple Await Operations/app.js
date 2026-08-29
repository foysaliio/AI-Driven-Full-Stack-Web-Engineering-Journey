// Multiple await expressions can be used
// when operations depend on each other.

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

const getProfile = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId,
        bio: "Learning Software Engineering",
      });
    }, 1000);
  });
};

const getSettings = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId,
        theme: "dark",
        language: "English",
      });
    }, 1000);
  });
};

async function loadDashboard() {
  console.time("dashboard");

  const user = await getUser();

  const profile = await getProfile(user.id);

  const settings = await getSettings(user.id);

  console.log(user);
  console.log(profile);
  console.log(settings);

  console.timeEnd("dashboard");
}

loadDashboard();

// These operations currently run sequentially:
//
// getUser
// ↓
// getProfile
// ↓
// getSettings
//
// Later we will learn when independent operations
// should run concurrently using Promise.all.
