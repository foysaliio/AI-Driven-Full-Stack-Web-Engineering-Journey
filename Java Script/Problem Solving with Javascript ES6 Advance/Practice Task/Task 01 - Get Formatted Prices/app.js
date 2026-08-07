const getFormattedPrices = (prices) => {
  const formattedPrices = prices.map((price) => `$${price}`);
  return formattedPrices;
};

const prices = [100, 250, 75];
console.log(getFormattedPrices(prices));
