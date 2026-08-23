// Getters allow us to read a value like a property.
// Setters allow us to update a value with controlled logic.

class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      return;
    }

    this._name = newName;
  }
}

const user = new User("Foysal");

console.log(user.name);

user.name = "Rahim";

console.log(user.name);

user.name = "A";

console.log(user.name);
