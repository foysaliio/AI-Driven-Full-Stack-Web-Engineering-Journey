// Errors should be narrowed before accessing specific properties.

function handleError(error: unknown): void {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Unknown error");
  }
}

try {
  throw new Error("Something went wrong");
} catch (error: unknown) {
  handleError(error);
}

// Another example

try {
  throw "Server unavailable";
} catch (error: unknown) {
  if (typeof error === "string") {
    console.log(error.toUpperCase());
  }
}
