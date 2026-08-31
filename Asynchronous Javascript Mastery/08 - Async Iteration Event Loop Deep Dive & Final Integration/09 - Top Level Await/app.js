// In modern JavaScript modules,
// await can be used at the top level.
//
// This works in environments that support
// top-level await in ES modules.

const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

if (!response.ok) {
  throw new Error(`HTTP Error: ${response.status}`);
}

const user = await response.json();

console.log(user);

// Without top-level await,
// we commonly wrap the code inside
// an async function.

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const post = await response.json();

  console.log(post);
}

main();

// Top-level await is mainly a module feature.
//
// It should not be assumed to work
// in every older script environment.
