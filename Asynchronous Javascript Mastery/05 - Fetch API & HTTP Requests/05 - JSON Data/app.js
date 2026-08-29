// JSON is a common data format
// used for communication between clients and servers.

// JavaScript object

const user = {
  id: 1,
  name: "Foysal",
  active: true,
};

// Convert JavaScript object to JSON string.

const jsonUser = JSON.stringify(user);

console.log(user);
console.log(jsonUser);
console.log(jsonUser.name); // Undefined

console.log(typeof user); // Object
console.log(typeof jsonUser); // String

// Convert JSON string back to JavaScript data.

const parsedUser = JSON.parse(jsonUser);

console.log(parsedUser);
console.log(typeof parsedUser); // Object

console.log(parsedUser.name); // Foysal

// Fetch response example

async function loadPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  // response.json() reads the response body
  // and parses JSON into JavaScript data.

  const post = await response.json();

  console.log(post);

  console.log(post.title);
}

loadPost();

// ============= Sending JSON: =============
//
// JavaScript Object
// ↓
// JSON.stringify()
// ↓
// JSON String
// ↓
// HTTP Request Body
//
// ============= Receiving JSON: =============
//
// HTTP Response
// ↓
// response.json()
// ↓
// JavaScript Object
