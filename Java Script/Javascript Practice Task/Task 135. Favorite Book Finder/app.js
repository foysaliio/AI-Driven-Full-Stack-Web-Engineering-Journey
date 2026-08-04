const describeMissingValue = (fieldValue) => {
  if (typeof fieldValue === "undefined") {
    return "Field was never set";
  } else if (fieldValue === null) {
    return "Field intentionally left empty";
  } else {
    return `Field has value: ${fieldValue}`;
  }
};

console.log(describeMissingValue(undefined));
// "Field was never set"
console.log(describeMissingValue(null));
// "Field intentionally left empty"
console.log(describeMissingValue("Rafi"));
// "Field has value: Rafi"
console.log(describeMissingValue(0));
// "Field has value: 0"
