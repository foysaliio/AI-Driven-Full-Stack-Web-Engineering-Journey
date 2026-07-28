// Input: an object
// Output: array of the object's keys
// Returns: an array

function listKeys(obj) {
  let keys = [];
  for (const key in obj) {
    keys.push(key);
  }

  return keys;
}

console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// Expected: ["name", "age", "city"]
