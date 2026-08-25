"use strict";
// Mapped types can add or remove
// readonly and optional modifiers.
const user = {
    id: 101,
    name: "Foysal",
    email: "foysalhossien77@gmail.com",
};
user.id = 102;
console.log(user);
const anotherUser = {
    name: "Sadik",
};
// anotherUser.name = "Foysal"; [This will provide an error]
console.log(anotherUser);
//!! Conclusion ---- [key in keyof User] : User[key];
// [This is property name] : and this is property value
