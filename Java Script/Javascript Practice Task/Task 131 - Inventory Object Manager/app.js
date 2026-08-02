const manageInventoryObject = (obj, action) => {
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return "Invalid";
  }

  if (action === "keys") {
    return Object.keys(obj);
  } else if (action === "values") {
    return Object.values(obj);
  } else if (action === "entries") {
    return Object.entries(obj);
  } else if (action.startsWith("delete:")) {
    const propName = action.split(":")[1];
    delete obj[propName];
    return obj;
  } else if (action === "seal") {
    return Object.seal(obj);
  } else if (action === "freeze") {
    return Object.freeze(obj);
  } else {
    return "Invalid";
  }
};

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "keys"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "delete:c"));
console.log(manageInventoryObject({ a: 1 }, "shrink"));
