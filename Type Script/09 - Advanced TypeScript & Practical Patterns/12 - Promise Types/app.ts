// Promise can also be explicitly typed.

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(): Promise<Product> {
  return Promise.resolve({
    id: 101,
    name: "Laptop",
    price: 75000,
  });
}

async function showProduct(): Promise<void> {
  const product = await getProduct();

  console.log(product.name);
  console.log(product.price);
}

showProduct();

// Array response

function getProducts(): Promise<Product[]> {
  return Promise.resolve([
    {
      id: 1,
      name: "Laptop",
      price: 75000,
    },
    {
      id: 2,
      name: "Phone",
      price: 35000,
    },
  ]);
}

async function showProducts(): Promise<void> {
  const products = await getProducts();

  products.forEach((product) => {
    console.log(product.name);
  });
}

showProducts();
