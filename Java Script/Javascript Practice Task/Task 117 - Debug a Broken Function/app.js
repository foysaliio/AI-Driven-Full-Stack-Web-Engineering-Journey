// Bug: find why the result comes out negative

function subtract(a, b) {
  return a - b; // find the bug
}

console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)
