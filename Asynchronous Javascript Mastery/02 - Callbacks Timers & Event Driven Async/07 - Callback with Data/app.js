// Async callbacks often receive data
// after an operation finishes.

function getUser(userId, callback) {
  console.log(`Fetching user ${userId}...`);

  setTimeout(() => {
    const user = {
      id: userId,
      name: "Foysal",
      email: "foysal@example.com",
    };

    callback(user);
  }, 1500);
}

getUser(101, (user) => {
  console.log("User received:");

  console.log(user);

  console.log(`Welcome, ${user.name}`);
});

// Another example

function calculatePrice(price, quantity, callback) {
  setTimeout(() => {
    const total = price * quantity;

    callback(total);
  }, 1000);
}

calculatePrice(500, 3, (total) => {
  console.log(`Total price: ${total}`);
});

// Returning multiple pieces of information

function processOrder(order, callback) {
  setTimeout(() => {
    const result = {
      success: true,
      orderId: 1001,
      product: order.product,
      total: order.price * order.quantity,
    };

    callback(result);
  }, 1000);
}

processOrder(
  {
    product: "Keyboard",
    price: 3500,
    quantity: 2,
  },
  (result) => {
    console.log(result);

    console.log(`Order total: ${result.total}`);
  },
);
