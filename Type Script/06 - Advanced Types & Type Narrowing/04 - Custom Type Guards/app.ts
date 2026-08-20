// We can create our own type guard functions.

type User = {
  name: string;
  email: string;
};

type Admin = {
  name: string;
  permissions: string[];
};

function isAdmin(user: User | Admin): user is Admin {
  return "permissions" in user;
}

function printUser(user: User | Admin): void {
  if (isAdmin(user)) {
    console.log(`Admin: ${user.name}`);
    console.log(`Permissions: ${user.permissions.join(", ")}`);
  } else {
    console.log(`User: ${user.name}`);
    console.log(`Email: ${user.email}`);
  }
}

const admin: Admin = {
  name: "Foysal",
  permissions: ["read", "write"],
};

const user: User = {
  name: "Rahim",
  email: "rahim@example.com",
};

printUser(admin);

printUser(user);
