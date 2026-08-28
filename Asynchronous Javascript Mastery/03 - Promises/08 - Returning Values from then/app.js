// Every then call returns a new Promise.

// If we return a normal value from then,
// that value becomes the resolved value
// of the next Promise in the chain.

Promise.resolve(10)
  .then((number) => {
    console.log(`First value: ${number}`);

    return number * 2;
  })
  .then((number) => {
    console.log(`Second value: ${number}`);

    return number + 5;
  })
  .then((number) => {
    console.log(`Final value: ${number}`);
  });

// Output:
//
// First value: 10
// Second value: 20
// Final value: 25

// Practical example

const getPrice = () => {
  return Promise.resolve(1000);
};

getPrice()
  .then((price) => {
    console.log(`Price: ${price}`);

    const discount = price * 0.1;

    return price - discount;
  })
  .then((discountedPrice) => {
    console.log(`After discount: ${discountedPrice}`);

    const tax = discountedPrice * 0.05;

    return discountedPrice + tax;
  })
  .then((finalPrice) => {
    console.log(`Final price: ${finalPrice}`);
  });

// Important:
// Forgetting return changes the next value.

Promise.resolve(5)
  .then((number) => {
    number * 2;

    // No return
  })
  .then((result) => {
    console.log(result);

    // undefined
  });
