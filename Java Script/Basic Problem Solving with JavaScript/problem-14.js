// Problem 14: You are given an object containing information about a student.

// ---- Tasks ----
// Print all keys.
// Print all values.
// Print each key-value pair.
// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Count the total number of properties in the object.
// Check if the object contains a property named "email".

//---- Expected input:
//  const student = {
//   name: "Utsho",
//   age: 25,
//   university: "DIU",
//   department: "CSE",
// };

// -----------------------------

//---- Expected output:
// name age university department

// Utsho 26 DIU CSE

// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Total Properties: 4
// Has Email: false

const student = {
  name: "Foysal",
  age: 24,
  university: "DPI",
  department: "EEE",
};

function objOperation(obj) {
  for (let key in obj) {
    console.log(key);
  }

  for (let key in obj) {
    console.log(obj[key]);
  }

  for (let key in obj) {
    console.log(key, ": ", obj[key]);
  }

  let objKeyCount = Object.keys(obj).length; // ["name", "age", "university", "department"]
  console.log("Total Properties: ", objKeyCount);

  let hasEmailProperty = obj.hasOwnProperty("email");
  console.log("Has Email: ", hasEmailProperty);
}

objOperation(student);
