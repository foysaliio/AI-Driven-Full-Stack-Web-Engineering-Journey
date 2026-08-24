// Data may not always be available immediately.

interface User {
  id: number;
  name: string;
}

let currentUser: User | null = null;

console.log(currentUser);

currentUser = {
  id: 1,
  name: "Foysal",
};

if (currentUser) {
  console.log(currentUser.name);
}

// Another example

const printUsername = (user: User | null): void => {
  if (!user) {
    console.log("No user found");
    return;
  }
  console.log(user.name);
};

printUsername(null);
printUsername({
  id: 2,
  name: "Sadik",
});
