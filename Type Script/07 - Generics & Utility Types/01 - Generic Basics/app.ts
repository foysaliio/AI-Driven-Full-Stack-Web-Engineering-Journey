// Generics allow us to create reusable and type-safe code.

// Without generics

const getValue = (value: any): any => {
  return value;
};

console.log(getValue("Foysal"));
console.log(getValue(22));
console.log(getValue(true));

// With generics

const getValueGeneric = <T>(value: T): T => {
  return value;
};

const username = getValueGeneric<string>("Foysal");

const age = getValueGeneric<number>(22);

const isStudent = getValueGeneric<boolean>(true);

console.log(username);
console.log(age);
console.log(isStudent);
