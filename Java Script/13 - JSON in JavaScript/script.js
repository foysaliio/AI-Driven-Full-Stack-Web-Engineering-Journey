"use strict";

// ----- a normal JavaScript object -----
const person = {
  name: "Ahnaf",
  age: 23,
  isStudent: false,
  skills: ["HTML", "CSS", "JavaScript"],
};
console.log(person);

// ----- converting an object to a JSON string -----
const jsonString = JSON.stringify(person);
console.log(jsonString);
console.log(typeof jsonString); // "string"

// ----- pretty-printing JSON with indentation -----
const prettyJson = JSON.stringify(person, null, 2); // 2 spaces indentation
console.log(prettyJson);

// ----- converting a JSON string back into an object -----
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);
console.log(typeof parsedPerson); // "object"

// ----- why JSON matters: storing data as text -----
localStorage.setItem("user", JSON.stringify(person));
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser);

// ----- handling invalid JSON safely -----
try {
  JSON.parse("this is not valid JSON");
} catch (error) {
  console.log("Failed to parse:", error.message);
}

// ----- JSON only supports certain data types -----
const withFunction = {
  name: "Test",
  sayHi: function () {
    console.log("hi");
  },
  undefinedValue: undefined,
};
console.log(JSON.stringify(withFunction)); // functions and undefined values are skipped
