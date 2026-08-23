"use strict";
// Getters allow us to read a value like a property.
// Setters allow us to update a value with controlled logic.
class User {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
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
