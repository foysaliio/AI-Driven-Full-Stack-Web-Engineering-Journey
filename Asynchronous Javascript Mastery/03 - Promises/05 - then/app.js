// then handles the fulfilled result of a Promise.

const userPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      id: 101,
      name: "Foysal",
      skill: ["Javascript", "Typescript"],
    });
  }, 1000);
});

userPromise.then((user) => {
  console.log(user);

  console.log(user.name);
  console.log(user.skill);
});

// The value passed to resolve
// becomes the parameter of the then callback.

const getProduct = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Laptop",
        price: 50000,
      });
    }, 1500);
  });
};

getProduct().then((product) => {
  console.log(`product: ${product.name}`);

  console.log(`Price: ${product.price}`);
});

// then can also receive a second callback
// for rejection, but using catch is usually cleaner.

const promise = Promise.resolve("Success");

promise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  },
);
