const processOrder = (orderTotal, onSuccess, onFailure) => {
  if (typeof onSuccess !== "function" || typeof onFailure !== "function") {
    return "Invalid";
  }

  if (orderTotal > 0) {
    return onSuccess(orderTotal);
  } else if (orderTotal <= 0) {
    return onFailure(orderTotal);
  }
};

console.log(
  processOrder(
    500,
    (t) => `Paid ${t}`,
    (t) => `Failed`,
  ),
);
// "Paid 500"

console.log(
  processOrder(
    -50,
    (t) => `Paid ${t}`,
    (t) => `Failed`,
  ),
);
// "Failed"

console.log(processOrder(500, "x", "y"));
// "Invalid"
