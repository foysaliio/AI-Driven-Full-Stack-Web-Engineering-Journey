const trackTicketNumber = (currentNumber, type) => {
  if (type === "pre") {
    return ++currentNumber;
  } else if (type === "post") {
    return `Used: ${currentNumber++}, Now: ${currentNumber}`;
  } else {
    return "Invalid";
  }
};

console.log(trackTicketNumber(5, "pre"));
console.log(trackTicketNumber(5, "post"));
console.log(trackTicketNumber(5, "skip"));
