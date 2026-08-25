"use strict";
// A simple TypeScript project can be organized like this:
//
// project/
// │
// ├── src/
// │   ├── types/
// │   │   └── user.ts
// │   │
// │   ├── services/
// │   │   └── userService.ts
// │   │
// │   ├── utils/
// │   │   └── formatter.ts
// │   │
// │   └── index.ts
// │
// ├── dist/
// ├── package.json
// └── tsconfig.json
function formatUser(user) {
    return `${user.id} - ${user.name}`;
}
const user = {
    id: 1,
    name: "Foysal",
};
console.log(formatUser(user));
