// Bug: this loop never ends — find the missing piece

function countUpTo(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    // something is missing here
    count++;
  }

  return count;
}

console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)
