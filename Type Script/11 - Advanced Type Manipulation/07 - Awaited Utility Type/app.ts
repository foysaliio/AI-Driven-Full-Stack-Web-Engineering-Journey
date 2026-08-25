// Awaited extracts the resolved value type
// from a Promise.

type UserPromise = Promise<{
  id: number;
  name: string;
}>;

type User = Awaited<UserPromise>;

const user: User = {
  id: 1,
  name: "Foysal",
};

console.log(user);

// Another example

async function getProduct() {
  return {
    id: 101,
    name: "Laptop",
    price: 75000,
  };
}

type Product = Awaited<ReturnType<typeof getProduct>>;

const product: Product = {
  id: 102,
  name: "Phone",
  price: 35000,
};

console.log(product);
