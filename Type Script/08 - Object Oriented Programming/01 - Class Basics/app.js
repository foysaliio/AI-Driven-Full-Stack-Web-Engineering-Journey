"use strict";
// A class is a blueprint for creating objects.
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user1 = new User("Foysal", 22);
const user2 = new User("Rahim", 25);
console.log(user1);
console.log(user2);
console.log(user1.name);
console.log(user2.age);
