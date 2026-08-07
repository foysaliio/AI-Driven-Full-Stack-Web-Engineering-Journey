/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/

let findUserById = (users, id) => {
  let expectedUser = users.find((user) => {
    return user.id === id;
  });

  return expectedUser ? expectedUser : "User not found";
};

let users = [
  { id: 1, name: "Rafi" },
  { id: 2, name: "Karim" },
  { id: 3, name: "Foysal" },
  { id: 4, name: "Rahim" },
];
console.log(findUserById(users, 3));
