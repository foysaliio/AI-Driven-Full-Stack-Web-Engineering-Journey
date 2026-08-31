// A race condition can happen when
// multiple asynchronous operations modify
// the same state.
//
// The operation that finishes last may overwrite
// a newer result.

let currentProfile = null;

// Simulated API request

function getUserProfile(userId, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: `User ${userId}`,
      });
    }, delay);
  });
}

// Problem example

async function selectUser(userId, delay) {
  const profile = await getUserProfile(userId, delay);

  currentProfile = profile;

  console.log("Current profile:", currentProfile);
}

// User selects User 1 first.
// This request is slow.

selectUser(1, 3000);

// Then user quickly selects User 2.
// This request is faster.

selectUser(2, 1000);

// Possible order:
//
// User 2 finishes first
// currentProfile = User 2
//
// User 1 finishes later
// currentProfile = User 1 ❌
//
// The UI now shows outdated data.
