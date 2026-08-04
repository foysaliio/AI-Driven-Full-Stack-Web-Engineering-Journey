// const getCartSummary = (items) => {
//   let count = 0;

//   const total = items.reduce((accum, item) => {
//     return accum + item.price;
//   }, 0);

//   const names = items.map((item) => {
//     return item.name;
//   });

//   const privateCartItemCount = () => {
//     count;
//   };

//   return `Cart: ${names.join(", ")} | Total: ${total} Taka`;
// };

// console.log(
//   getCartSummary([
//     { name: "Pen", price: 100 },
//     { name: "Bag", price: 250 },
//   ]),
// );

// console.log(getCartSummary([{ name: "Cup", price: 80 }]));

// const createCartCounter = () => {
//   let count = 0;

//   return () => {
//     return ++count;
//   };
// };

// const cartCounter = createCartCounter();
// console.log(cartCounter());
// console.log(cartCounter());
// console.log(cartCounter());

const createCartCounter = () => {
  let count = 0;

  return (items) => {
    const total = items.reduce((accum, item) => {
      return accum + item.price;
    }, 0);

    const names = items.map((item) => {
      return item.name;
    });

    count += items.length;

    return `Cart: ${names.join(", ")} | Total: ${total} Taka | Item Count: ${count}`;
  };
};

const getCartSummary = createCartCounter();

console.log(
  getCartSummary([
    { name: "Pen", price: 100 },
    { name: "Bag", price: 250 },
  ]),
);

console.log(getCartSummary([{ name: "Cup", price: 80 }]));
