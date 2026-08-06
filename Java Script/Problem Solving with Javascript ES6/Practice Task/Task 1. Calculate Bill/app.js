const calculateBill = (amount, taxRate = 0.05) => {
  const finalBill = amount + amount * taxRate;
  return finalBill;
};

console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.1));
