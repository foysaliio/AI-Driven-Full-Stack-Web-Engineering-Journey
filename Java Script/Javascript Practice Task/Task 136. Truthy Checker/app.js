const checkTruthy = (value) => {
  if (
    value === false ||
    value === 0 ||
    value === "" ||
    value === null ||
    value === undefined ||
    Number.isNaN(value)
  ) {
    return "Falsy";
  } else {
    return "Truthy";
  }
};

console.log(checkTruthy(0));
console.log(checkTruthy(""));
console.log(checkTruthy([]));
console.log(checkTruthy({}));
console.log(checkTruthy("0"));
console.log(checkTruthy(NaN));
