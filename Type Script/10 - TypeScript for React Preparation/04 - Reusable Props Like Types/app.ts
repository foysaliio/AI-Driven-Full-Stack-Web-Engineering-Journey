// A type can describe data passed into a function.

type UserInfo = {
  name: string;
  age: number;
  isActive?: boolean;
};

const showUser = ({ name, age, isActive = false }: UserInfo): void => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Active: ${isActive}`);
};

showUser({
  name: "Foysal",
  age: 23,
});

showUser({
  name: "Sadik",
  age: 20,
  isActive: true,
});
