const value: unknown = "Hello TypeScript";
let setValue = <string>value;
console.log(setValue.length);

let value1: unknown = "Hello TypeScript";
let setValue1 = value1 as string;
console.log(setValue1.length);
