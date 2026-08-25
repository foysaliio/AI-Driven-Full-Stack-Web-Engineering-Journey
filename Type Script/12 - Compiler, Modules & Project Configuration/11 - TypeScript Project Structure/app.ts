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

interface User {
  id: number;
  name: string;
}

function formatUser(user: User): string {
  return `${user.id} - ${user.name}`;
}

const user: User = {
  id: 1,
  name: "Foysal",
};

console.log(formatUser(user));
