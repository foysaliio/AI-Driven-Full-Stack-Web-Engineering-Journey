// Promise.allSettled waits for every Promise
// to settle, whether fulfilled or rejected.

const userRequest = Promise.resolve({
  id: 101,
  name: "Foysal",
});

const postsRequest = Promise.reject(new Error("Posts could not be loaded"));

const notificationsRequest = Promise.resolve(["Welcome back"]);

Promise.allSettled([userRequest, postsRequest, notificationsRequest]).then(
  (results) => {
    console.log(results);
  },
);

// Result structure is similar to:
//
// [
//   {
//     status: "fulfilled",
//     value: {...}
//   },
//   {
//     status: "rejected",
//     reason: Error(...)
//   },
//   {
//     status: "fulfilled",
//     value: [...]
//   }
// ]

// Practical example

const checkService = (name, shouldFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${name} unavailable`));

        return;
      }

      resolve(`${name} available`);
    }, 1000);
  });
};

const checkAllServices = async () => {
  const results = await Promise.allSettled([
    checkService("Authentication", false),
    checkService("Payment", true),
    checkService("Email", false),
  ]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Service ${index + 1}: ${result.value}`);
    } else {
      console.log(`Service ${index + 1}: ${result.message}`);
    }
  });
};

checkAllServices();
