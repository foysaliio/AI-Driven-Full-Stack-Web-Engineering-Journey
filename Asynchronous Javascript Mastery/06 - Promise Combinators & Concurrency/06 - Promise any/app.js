// Promise.any returns the first fulfilled Promise.
//
// Rejected Promises are ignored
// while another Promise may still succeed.

const connectServer = (name, dalay, shouldFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${name} connection failed`));
        return;
      }

      resolve(`${name} connected`);
    }, dalay);
  });
};

const connectToAvailableServer = async () => {
  try {
    const result = await Promise.any([
      connectServer("Server A", 500, true),
      connectServer("Server B", 1200, false),
      connectServer("Server C", 800, true),
      connectServer("Server D", 900, false),
    ]);

    console.log(result);
    // Server D connected
  } catch (error) {
    console.log(error.message);
  }
};

connectToAvailableServer();

// If every Promise rejects,
// Promise.any rejects with AggregateError.

async function allServersFail() {
  try {
    await Promise.any([
      Promise.reject(new Error("Server A failed")),

      Promise.reject(new Error("Server B failed")),
    ]);
  } catch (error) {
    console.log(error.name);

    console.log(error.errors);
  }
}

allServersFail();
