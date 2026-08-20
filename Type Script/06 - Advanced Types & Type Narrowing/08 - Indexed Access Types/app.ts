// Indexed access types allow us to access
// a specific property type from another type.

type User = {
  name: string;
  age: number;
  email: string;
};

type UserName = User["name"];

type UserAge = User["age"];

type UserEmail = User["email"];

let nameValue: UserName = "Foysal";

let ageValue: UserAge = 22;

let emailValue: UserEmail = "foysal@example.com";

console.log(nameValue);
console.log(ageValue);
console.log(emailValue);

// Accessing multiple properties

type UserInfo = User["name" | "age"];

let info1: UserInfo = "Foysal";

let info2: UserInfo = 22;

console.log(info1);
console.log(info2);
