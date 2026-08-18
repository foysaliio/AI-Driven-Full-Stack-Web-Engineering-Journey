// The "in" operator can narrow object types based on the existence of a property.

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

const printUserInfo = (user: Admin | User): void => {
  console.log(`Name: ${user.name}`);

  if ("permissions" in user) {
    console.log(`Permissions: ${user.permissions.join(", ")}`);
  } else {
    console.log(`Email: ${user.email}`);
  }
};

const admin: Admin = {
  name: "Foysal Hossien",
  permissions: ["read", "write"],
};

const normalUser: User = {
  name: "Robin",
  email: "robin@gmail.com",
};

printUserInfo(admin);
printUserInfo(normalUser);
