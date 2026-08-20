// never represents a value that never occurs.

// A function that always throws an error
// has a return type of never.

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong");

// A function with an infinite loop also returns never

function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}
