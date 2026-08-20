type PaymentMethod = "cash" | "card" | "mobile";

// Interface is mainly used to define object shapes,
// so it cannot directly represent a union of literal values.

interface Order {
  id: number;
  method: PaymentMethod;
}

const order1: Order = {
  id: 1,
  method: "card",
};
console.log(order1);
