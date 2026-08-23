"use strict";
// Inheritance allows one class to reuse
// properties and methods from another class.
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name}`);
    }
}
class Student extends Person {
    studentId;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}
const person1 = new Person("Foysal Hossien", 23);
const student1 = new Student("Foysal", 23, 111);
console.log(person1);
console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.studentId);
student1.introduce();
student1.study();
console.log();
