// readonly prevents a property from being reassigned.

class User {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user = new User(101, "Foysal");

console.log(user.id);

user.name = "Foysal Hossien";

// This will produce a TypeScript error:

// user.id = 202;

console.log(user);
