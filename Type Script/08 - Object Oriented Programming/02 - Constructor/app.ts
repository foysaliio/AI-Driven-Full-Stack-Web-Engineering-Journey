// A constructor runs automatically
// when a new object is created.

class Product {
  name: string;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

const laptop = new Product("Laptop", 75000, "Electronics");

const phone = new Product("Phone", 35000, "Electronics");

console.log(laptop);
console.log(phone);
