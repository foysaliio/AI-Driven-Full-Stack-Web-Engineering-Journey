function generateReceipt(customerName, items, total) {
  if (
    typeof customerName !== "string" ||
    !Array.isArray(items) ||
    items.length === 0 ||
    typeof total !== "number"
  ) {
    return "Invalid";
  }

  for (const item of items) {
    if (typeof item !== "string") {
      return "Invalid";
    }
  }

  const itemList = items.join(", ");

  return `Receipt for ${customerName}
Items: ${itemList}
Total: ৳${total}`;
}

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
