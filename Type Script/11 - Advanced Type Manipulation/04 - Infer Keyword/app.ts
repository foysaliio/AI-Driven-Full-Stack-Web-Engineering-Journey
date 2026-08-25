// infer allows TypeScript to capture a type
// from inside another type.

type ArrayItem<T> = T extends (infer Item)[] ? Item : T;

type StringItem = ArrayItem<string[]>;

type NumberItem = ArrayItem<number[]>;

type NormalType = ArrayItem<boolean>;

const username: StringItem = "Foysal";

const age: NumberItem = 22;

const isActive: NormalType = true;

console.log(username);
console.log(age);
console.log(isActive);

// Extracting a function return type manually

type GetReturnType<T> = T extends (...args: any[]) => infer Return
  ? Return
  : never;

function getUser() {
  return {
    name: "Foysal",
    age: 22,
  };
}

type User = GetReturnType<typeof getUser>;

const user: User = {
  name: "Sadik",
  age: 24,
};

console.log(user);
