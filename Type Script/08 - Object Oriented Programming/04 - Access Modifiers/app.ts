// Access modifiers control where properties and methods can be accessed.

// public → accessible from anywhere
// private → accessible only inside the class
// protected → accessible inside the class and child classes

class User {
  public name: string;
  private password: string;
  protected age: number;

  constructor(name: string, password: string, age: number) {
    this.name = name;
    this.password = password;
    this.age = age;
  }
  showPassword(): string {
    return this.password;
  }
}

const user1 = new User("Foysal", "Foysal12*", 23);
console.log(user1.name);

// This will produce a TypeScript error:

// console.log(user1.password);

// This will also produce a TypeScript error:

// console.log(user1.age);

console.log(user1.showPassword());
