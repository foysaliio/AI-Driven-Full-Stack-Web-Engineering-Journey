interface Container<T> {
  item: T;
}

const numValue: Container<number> = {
  item: 100,
};

const strValue: Container<string> = {
  item: "Books",
};

console.log(numValue);
console.log(strValue);
