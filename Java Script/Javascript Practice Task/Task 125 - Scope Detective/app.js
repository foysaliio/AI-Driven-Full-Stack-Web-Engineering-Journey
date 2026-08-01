function describeDeclaration(keyword) {
  if (typeof keyword !== "string") {
    return "Invalid";
  }
  if (keyword === "var") {
    return "Can redeclare, can reassign";
  } else if (keyword === "let") {
    return "Cannot redeclare, can reassign";
  } else if (keyword === "const") {
    return "Cannot redeclare, cannot reassign";
  } else {
    return "Invalid";
  }
}

console.log(describeDeclaration("var"));
console.log(describeDeclaration("let"));
console.log(describeDeclaration("const"));
console.log(describeDeclaration("con"));
console.log(describeDeclaration("le"));
console.log(describeDeclaration("va"));
