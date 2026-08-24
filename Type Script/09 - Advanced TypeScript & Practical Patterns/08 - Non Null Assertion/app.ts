// The ! operator tells TypeScript
// that a value is not null or undefined.

// const input = document.querySelector("#username") as HTMLInputElement;

// input.value = "Foysal";

// Another example

let username: string | null = "Foysal";

console.log(username!.toUpperCase());
