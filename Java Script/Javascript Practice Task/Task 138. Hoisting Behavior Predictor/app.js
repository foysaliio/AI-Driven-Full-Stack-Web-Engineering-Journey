const predictHoisting = (keywordStr) => {
  if (keywordStr === "var") {
    return "undefined (hoisted, not initialized)";
  } else if (keywordStr === "let") {
    return "ReferenceError (Temporal Dead Zone)";
  } else if (keywordStr === "const") {
    return "ReferenceError (Temporal Dead Zone)";
  } else {
    return "Invalid";
  }
};

console.log(predictHoisting("var"));
console.log(predictHoisting("let"));
console.log(predictHoisting("const"));
console.log(predictHoisting("function"));
