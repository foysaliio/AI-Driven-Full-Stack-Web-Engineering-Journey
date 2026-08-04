const mutateOrCopy = (data) => {
  if (typeof data !== "number" && typeof data !== "object") {
    return "Invalid";
  }

  if (typeof data === "number") {
    let copy = data;
    copy = 100;
    return `Original unaffected: ${data}`;
  }
  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    let copy2 = data;
    copy2.value = 100;
    return `Original changed: ${data.value}`;
  }
};

console.log(mutateOrCopy(10));
// "Original unaffected: 10"

console.log(mutateOrCopy({ value: 10 }));
// "Original changed: 100"

console.log(mutateOrCopy("10"));
// "Invalid"
