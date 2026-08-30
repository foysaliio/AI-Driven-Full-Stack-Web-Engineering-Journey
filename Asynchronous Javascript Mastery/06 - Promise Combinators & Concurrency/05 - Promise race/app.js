// Promise.race settles as soon as
// the first Promise settles.
//
// The first Promise can either fulfill or reject.

const requestServer = (name, delay, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${name} failed`));
        return;
      }

      resolve(`${name} responded`);
    }, delay);
  });
};

const findFastestServer = async () => {
  try {
    const result = await Promise.race([
      requestServer("Server A", 2000),
      requestServer("Server B", 800),
      requestServer("Server C", 1500),
    ]);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

findFastestServer();

// First rejection also wins.

const rejectionRace = async () => {
  try {
    const result = await Promise.race([
      requestServer("Fast Failed Server", 500, true),
      requestServer("Fast Failed Server", 1500),
    ]);

    console.log(result);
  } catch (error) {
    console.log(`Race rejected: ${error.message}`);
  }
};

rejectionRace();
