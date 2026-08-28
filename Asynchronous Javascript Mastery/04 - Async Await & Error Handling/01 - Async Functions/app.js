// The async keyword turns a function
// into an asynchronous function.
//
// An async function always returns a Promise.

async function greet() {
  return "Hello, Foysal";
}

const result = greet();

console.log(greet);
// result is a Promise.

result.then((message) => {
  console.log(message);
});

// Async function with an object

async function getUser() {
  return {
    id: 101,
    name: "Foysal",
    email: "foysal@web.com",
  };
}

getUser().then((user) => {
  console.log(user);
});

// Arrow function

const getCourse = async () => {
  return {
    title: "Asynchronous JavaScript",
    isCompleted: false,
  };
};

getCourse().then((course) => {
  console.log(course);
});

// Even a normal value becomes a fulfilled Promise.

async function getNumber() {
  return 100;
}

getNumber().then((number) => {
  console.log(number);
});
