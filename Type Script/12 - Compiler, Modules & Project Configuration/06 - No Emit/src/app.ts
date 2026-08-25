// noEmit tells TypeScript to type-check code
// without generating JavaScript files.
//
// {
//   "compilerOptions": {
//     "noEmit": true
//   }
// }

interface User {
  id: number;
  name: string;
}
const user: User = {
  id: 1,
  name: "Foysal",
};

console.log(user);
