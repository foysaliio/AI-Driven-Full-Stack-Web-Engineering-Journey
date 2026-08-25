// Mapped types can add or remove
// readonly and optional modifiers.

type User = {
  readonly id: number;
  name?: string;
  email?: string;
};

// Remove readonly and optional modifiers

type CompleteUser = {
  -readonly [key in keyof User]-?: User[key];
};

const user: CompleteUser = {
  id: 101,
  name: "Foysal",
  email: "foysalhossien77@gmail.com",
};

user.id = 102;

console.log(user);

// Add readonly and optional modifiers

type FlexibleUser = {
  readonly [key in keyof CompleteUser]?: CompleteUser[key];
};

const anotherUser: FlexibleUser = {
  name: "Sadik",
};

// anotherUser.name = "Foysal"; [This will provide an error]

console.log(anotherUser);

//!! Conclusion ---- [key in keyof User] : User[key];
// [This is property name] : and this is property value
