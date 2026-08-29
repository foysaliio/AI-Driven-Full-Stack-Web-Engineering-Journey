// Every async function returns a Promise,
// even when it returns a regular value.

async function getName() {
  return "Foysal";
}

console.log(getName);
// Promise { ... }

// We can consume the result using then.

getName().then((name) => {
  console.log(name);
});

// Or using await inside another async function.

async function showName() {
  const name = await getName();

  console.log(`Name: ${name}`);
}

showName();

// Returning an existing Promise

const getUserFromServer = () => {
  return Promise.resolve({
    id: 1,
    name: "Foysal",
  });
};

async function getUser() {
  return getUserFromServer();
}

async function displayUser() {
  const user = await getUser();

  console.log(user);
}

displayUser();

// Rejected async function

async function failOperation() {
  throw new Error("Operation failed");
}

failOperation().catch((error) => {
  console.log(error.message);
});
