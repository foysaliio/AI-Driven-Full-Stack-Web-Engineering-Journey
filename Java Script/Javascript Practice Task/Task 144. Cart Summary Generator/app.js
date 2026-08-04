const cartSummary = (cartItems, previewCount = 2) => {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return "Invalid";
  }

  const total = cartItems.reduce((accum, item) => {
    return accum + item.price;
  }, 0);

  const preview = cartItems.slice(0, previewCount);

  return { total, preview }; // ES6 Object Property Shorthand   (return { total: total, preview: preview }; )
};

console.log(cartSummary([{ price: 100 }, { price: 200 }, { price: 300 }]));
console.log(cartSummary([{ price: 50 }], 1));
console.log(cartSummary([]));
