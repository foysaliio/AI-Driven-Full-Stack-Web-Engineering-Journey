// Record creates an object type with specific keys
// and a specific value type.

type UserRoles = Record<string, string>;

const roles: UserRoles = {
  admin: "Full Access",
  editor: "Edit Access",
  viewer: "Read Access",
};

console.log(roles);

// Another example

type Scores = Record<string, number>;

const scores: Scores = {
  Foysal: 95,
  Rahim: 88,
  Karim: 92,
};

console.log(scores);

// Specific keys

type Status = "success" | "error" | "loading";

type StatusMessages = Record<Status, string>;

const messages: StatusMessages = {
  success: "Operation successful",
  error: "Something went wrong",
  loading: "Please wait...",
};

console.log(messages);
