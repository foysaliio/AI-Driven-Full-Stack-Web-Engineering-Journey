// A class can implement an interface.

interface Person {
  name: string;
  age: number;

  introduce(): void;
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const student = new Student("Foysal", 22);

student.introduce();
