"use strict";
// A class can implement an interface.
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
const student = new Student("Foysal", 22);
student.introduce();
