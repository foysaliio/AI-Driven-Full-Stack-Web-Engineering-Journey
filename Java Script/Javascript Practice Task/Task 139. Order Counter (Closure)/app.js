const createOrderCounter = () => {
  let count = 0;

  const innerCounter = () => {
    return ++count;
  };
  return innerCounter;
};

const counter1 = createOrderCounter();
const counter2 = createOrderCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());
