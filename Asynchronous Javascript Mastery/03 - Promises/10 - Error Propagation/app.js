// Errors automatically travel down
// a Promise chain until a rejection handler catches them.


const getUser = () => {
  return Promise.resolve({
    id: 101,
    name: "Foysal",
  });
};

getUser()
  .then((user) => {
    console.log(user);

    return user.id;
  })
  .then((userId) => {
    console.log(`User ID: ${userId}`);

    throw new Error("Failed while loading posts");
  })
  .then(() => {
    // This step is skipped because
    // the previous step rejected.

    console.log("This will not run");
  })
  .then(() => {
    console.log("This will also not run");
  })
  .catch((error) => {
    console.log(`Error caught: ${error.message}`);
  });


// Rejecting a Promise behaves similarly.

const processPayment = (success) => {
  return new Promise((resolve, reject) => {
    if (!success) {
      reject(new Error("Payment failed"));
      return;
    }
    resolve("Payment successful");
  });
};

processPayment(false)
  .then((result) => {
    console.log(result);

    return "Creating order";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

processPayment(true)
  .then((result) => {
    console.log(result);

    return "Creating order";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
