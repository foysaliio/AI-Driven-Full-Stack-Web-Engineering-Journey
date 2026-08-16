"use strict";
const printUser = (name, age) => {
    const outputSentence = `${name} is ${age} years old.`;
    console.log(outputSentence);
};
printUser("Amina", 20);
printUser("Foysal", 23);
// Traditional way
// function printUser(name: string, age: number): void {
//   console.log(`${name} is ${age} years old.`);
// }
// printUser("Amina", 22);
