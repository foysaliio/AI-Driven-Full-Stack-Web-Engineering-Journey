// finally runs whether the async operation
// succeeds or fails.

const loadData = (shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data loaded successfully");
        return;
      }
      reject(new Error("Failed to load data"));
    }, 1000);
  });
};

async function showData() {
  let isLoading = true;

  console.log(`Loading: ${isLoading}`);

  try {
    const data = await loadData(true);

    console.log(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    isLoading = false;

    console.log(`Loading: ${isLoading}`);
  }
}

showData();

// Failure example

async function showFailedData() {
  try {
    const data = await loadData(false);
    console.log(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Request finished");
  }
}

showFailedData();
