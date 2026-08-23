"use strict";
// A constructor runs automatically
// when a new object is created.
class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
const laptop = new Product("Laptop", 75000, "Electronics");
const phone = new Product("Phone", 35000, "Electronics");
console.log(laptop);
console.log(phone);
class Student {
    name;
    idNumber;
    subject;
    constructor(name, idNumber, subject) {
        this.name = name;
        this.idNumber = idNumber;
        this.subject = subject;
    }
}
const foysal = new Student("Foysal", 101, ["Math", "Physics", "Chemistry"]);
const hridoy = new Student("Hridoy", 102, ["Accounting", "Finance"]);
console.log(foysal);
console.log(hridoy);
