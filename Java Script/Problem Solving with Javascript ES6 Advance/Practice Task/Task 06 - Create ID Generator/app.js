const createIdGenerator = () => {
  let count = 0;

  return () => {
    return ++count;
  };
};

const nextId = createIdGenerator();

console.log(nextId());
console.log(nextId());
console.log(nextId());
