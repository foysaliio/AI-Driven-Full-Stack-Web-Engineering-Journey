// Type narrowing allows TypeScript to determine a more specific type inside a condition.

const printValue = (value: string | number): void => {
  if (typeof value === "string") {
    console.log(value.toLocaleUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
};

printValue("Foysal");
printValue(99.5);

// Another example

const processValue = (value: string | number): void => {
  if (typeof value === "string") {
    console.log(`String length: ${value.length}`);
  } else {
    console.log(`Number value: ${value}`);
  }
};

processValue("TypeScript");
processValue(100);
