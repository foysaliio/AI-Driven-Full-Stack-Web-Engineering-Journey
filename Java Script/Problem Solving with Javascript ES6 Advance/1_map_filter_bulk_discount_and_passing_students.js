/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

let applyDiscount = (prices, discountRate = 0) => {
  let pricesAfterDiscount = prices.map((elem, ind, arr) => {
    const discountedPrice = elem - (elem * discountRate) / 100;
    return discountedPrice;
  });
  return pricesAfterDiscount;
};
let productPrices = [500, 1000, 250, 400, 700];
console.log(applyDiscount(productPrices, 10));
console.log(productPrices);


