enum OrderStatus {
  Placed = "Placed",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

const statusChecker = (status: OrderStatus): string => {
  return `Current status: ${status.toUpperCase()}`;
};
console.log(statusChecker(OrderStatus.Shipped));
