// await waits for a Promise to settle
// inside an async function.

const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
        name: "Foysal",
      });
    }, 1500);
  });
};

const showUser = async () => {
  console.log("Loading user.....");

  const user = await getUser();

  console.log("User loaded");

  console.log(user);

  console.log(user.name);
};

showUser();

console.log("JavaScript continues outside the async function");

// Another example

const getPrice = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5000);
    }, 1000);
  });
};

const calculatePrice = async () => {
  const price = await getPrice();

  const discount = price * 0.1;

  const finalPrice = price - discount;

  console.log(`Orginal price: ${price}`);

  console.log(`Discount: ${discount}`);

  console.log(`Final price: ${finalPrice}`);
};

calculatePrice();
