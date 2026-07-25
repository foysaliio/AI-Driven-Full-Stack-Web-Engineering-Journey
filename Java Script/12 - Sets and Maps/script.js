"use strict";

// ----- creating a Set (stores only unique values) -----
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 3]);
console.log(uniqueNumbers); // duplicates are automatically removed

// ----- adding and removing from a Set -----
uniqueNumbers.add(4);
uniqueNumbers.delete(1);
console.log(uniqueNumbers);

// ----- checking size and existence -----
console.log(uniqueNumbers.size);
console.log(uniqueNumbers.has(3)); // true

// ----- looping through a Set -----
uniqueNumbers.forEach((value) => {
  console.log(value);
});

// ----- practical use: removing duplicates from an array -----
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(numbersWithDuplicates)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]

// ----- creating a Map (stores key-value pairs, any type as key) -----
const userRoles = new Map();
userRoles.set("Ahnaf", "Admin");
userRoles.set("Rahim", "Editor");
console.log(userRoles);

// ----- getting a value from a Map -----
console.log(userRoles.get("Ahnaf")); // "Admin"

// ----- checking size and existence -----
console.log(userRoles.size);
console.log(userRoles.has("Rahim")); // true

// ----- removing a key from a Map -----
userRoles.delete("Rahim");
console.log(userRoles);

// ----- looping through a Map -----
userRoles.set("Karim", "Viewer");
for (const [name, role] of userRoles) {
  console.log(`${name}: ${role}`);
}

// ----- Map vs Object: Map keys can be any type -----
const objKey = { id: 1 };
const mapWithObjectKey = new Map();
mapWithObjectKey.set(objKey, "This key is an object");
console.log(mapWithObjectKey.get(objKey));
