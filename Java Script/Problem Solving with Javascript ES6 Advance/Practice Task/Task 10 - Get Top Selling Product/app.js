const getTopSellingProduct = (orders) => {
  const totalSales = orders.reduce((summary, order) => {
    summary[order.product] =
      (summary[order.product] || 0) + order.unitsSold;

    return summary;
  }, {});

  const products = Object.keys(totalSales).map((product) => {
    return {
      product,
      unitsSold: totalSales[product],
    };
  });

  const topProduct = products.reduce((top, current) => {
    return current.unitsSold > top.unitsSold ? current : top;
  });

  return topProduct.product;
};

const orders = [
  { product: "Pen", unitsSold: 30 },
  { product: "Bag", unitsSold: 12 },
  { product: "Pen", unitsSold: 25 },
];

console.log(getTopSellingProduct(orders));