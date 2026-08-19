let value: string | number = "100";

let newNumber = Number(value);

newNumber += 10;

console.log(newNumber);

// Double assertion is risky because it can bypass TypeScript's type checking.
let riskyValue = "Hello" as unknown as number;
