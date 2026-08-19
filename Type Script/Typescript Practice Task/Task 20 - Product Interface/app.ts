interface Product {
  title: string;
  price: number;
  inStock?: boolean;
}

const phone: Product = {
  title: "iPhone17",
  price: 24000,
  inStock: true,
};
const laptop: Product = {
  title: "HP, Probook",
  price: 30000,
};

const productPrice = (item: Product): number => {
  return item.price;
};
console.log(productPrice(phone));
console.log(productPrice(laptop));
