// Interface

interface UserInterface {
  name: string;
  age: number;
}

interface UserInterface {
  email: string;
}

const interfaceUser: UserInterface = {
  name: "Foysal",
  age: 22,
  email: "foysal@example.com",
};

console.log(interfaceUser);

// Type Alias

type UserType = {
  name: string;
  age: number;
};

const typeUser: UserType = {
  name: "Rahim",
  age: 25,
};

console.log(typeUser);

// Type aliases can easily create unions

type Status = "success" | "error" | "loading";

let statusDisplay: Status = "success";

console.log(statusDisplay);
