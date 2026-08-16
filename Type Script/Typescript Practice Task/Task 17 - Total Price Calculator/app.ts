const priceCalculator = (price: number, quantity: number): number => {
  return price * quantity;
};
console.log(priceCalculator(1500, 3));
console.log(priceCalculator(240, 8));
