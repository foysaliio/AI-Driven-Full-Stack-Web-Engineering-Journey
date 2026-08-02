const printObjectDetails = (obj, loopType) => {
  const forInArr = [];
  const forofentriesArr = [];
  if (loopType === "forin") {
    for (const key in obj) {
      forInArr.push(`${key}: ${obj[key]}`);
    }
    return forInArr;
  } else if (loopType === "forofentries") {
    const keyVal = Object.entries(obj);
    for (const [key, value] of keyVal) {
      forofentriesArr.push(`${key}: ${value}`);
    }
    return forofentriesArr;
  } else if (loopType === "entriesDestructure") {
    return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
  } else {
    return "Invalid";
  }
};

console.log(printObjectDetails({ fruit: "Mango", price: 50 }, "forin"));
console.log(printObjectDetails({ fruit: "Apple", price: 80 }, "forofentries"));
console.log(
  printObjectDetails({ fruit: "Mango", price: 70 }, "entriesDestructure"),
);
console.log(printObjectDetails({}, "loopThrough"));
