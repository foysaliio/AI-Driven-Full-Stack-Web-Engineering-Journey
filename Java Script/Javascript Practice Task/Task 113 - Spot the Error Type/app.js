// Bug type: Syntax
function sayHi(name) {
  console.log("Hi, " + name);
}

sayHi("Mira");

// // Bug type: Runtime
let word = "hello";
console.log(word.toUpperCase());

// // Bug type: Logic
function square(num) {
  return num * num;
}

console.log(square(4));
