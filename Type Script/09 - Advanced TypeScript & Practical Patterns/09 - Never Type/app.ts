// never represents values that never occur.

// A function that always throws an error
// can have a never return type.

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong");

// Another example

function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}

// infiniteLoop();
