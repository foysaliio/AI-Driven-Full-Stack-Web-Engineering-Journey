// Type guards are checks that help TypeScript
// determine the specific type of a value.

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printValue(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is not a string");
  }
}

printValue("Foysal");

printValue(100);

// Object type guard

interface User {
  name: string;
  age: number;
}

function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return "name" in value && "age" in value;
}

const data: unknown = {
  name: "Foysal",
  age: 22,
};

if (isUser(data)) {
  console.log(data.name);
  console.log(data.age);
}
