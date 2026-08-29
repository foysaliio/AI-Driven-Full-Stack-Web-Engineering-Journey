// throw creates an error and stops
// the normal execution of the current flow.

const validateUser = (user) => {
  if (!user) {
    throw new Error("User is required");
  }

  if (!user.name) {
    throw new Error("User name is required");
  }

  return true;
};

try {
  validateUser({
    name: "Foysal",
  });

  console.log("User is valid");
} catch (error) {
  console.log(error.message);
}

// Throwing errors inside async functions

async function getProduct(productId) {
  if (!productId) {
    throw new Error("Product ID is required");
  }

  return {
    id: productId,
    name: "Laptop",
    price: 80000,
  };
}

async function showProduct() {
  try {
    const product = await getProduct(101);

    console.log(product);
  } catch (error) {
    console.log(error.message);
  }
}

showProduct();

// Failed example

async function showInvalidProduct() {
  try {
    const product = await getProduct(null);

    console.log(product);
  } catch (error) {
    console.log(error.message);
  }
}

showInvalidProduct();
