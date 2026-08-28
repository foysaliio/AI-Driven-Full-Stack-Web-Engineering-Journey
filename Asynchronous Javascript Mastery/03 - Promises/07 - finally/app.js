// finally runs when a Promise settles,
// whether it succeeds or fails.

const loadData = (shouldSucceed) => {
  return new Promise((resolve, reject) => {
    console.log("Loading started");

    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data loaded");
        return;
      }

      reject(new Error("Failed to load data"));
    }, 1000);
  });
};

loadData(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Loading finished");
  });

// Failure example

loadData(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Cleanup completed");
  });

// Practical loading state example

let isLoading = false;

isLoading = true;

console.log(`Loading: ${isLoading}`);

loadData(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    isLoading = false;

    console.log(`Loading: ${isLoading}`);
  });
