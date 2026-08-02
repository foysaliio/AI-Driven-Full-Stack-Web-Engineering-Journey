const refactorToES6 = (items) => {
  if (!Array.isArray(items)) {
    return "Invalid";
  }

  const total = items.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return `Total: ${total} Taka`;
};

console.log(refactorToES6([{ price: 100 }, { price: 250 }]));
console.log(refactorToES6([{ price: 80 }]));
