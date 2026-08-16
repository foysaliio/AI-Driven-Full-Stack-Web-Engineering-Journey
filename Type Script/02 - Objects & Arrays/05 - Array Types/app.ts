// Array types define what type of values an array can contain.

let favNumbers: number[] = [10, 20, 30, 40];

let friendNames: string[] = ["Sadik", "Tuhin", "Mim"];

let scores: number[] = [80, 97, 34, 35];

console.log(favNumbers);
console.log(friendNames);
console.log(scores);

favNumbers.push(50);
friendNames.push("Munna");

console.log(favNumbers);
console.log(friendNames);

// These will produce TypeScript errors:

// favNumbers.push("39");
// friendNames.push(false);
