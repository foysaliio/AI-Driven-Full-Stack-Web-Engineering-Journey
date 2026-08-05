/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/

const calculateShipping = (orderAmount, shippingFee = 60) => {
  // if(orderAmount>=1000){
  //   return "Free Shipping"
  // } else{
  //   return `Shipping Fee: ${shippingFee} Taka`
  // }

  // condition ? true : false
  return orderAmount >= 1000
    ? "Free Shipping"
    : `Shipping Fee: ${shippingFee} Taka`;
};
console.log(calculateShipping(1200));
console.log(calculateShipping(500));
console.log(calculateShipping(500, 100));

/*
  Problem 2: Arrow Function with Multiple Conditions
  Write an arrow function that assigns a grade based on marks.
  90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
  Rules: if not number -> return invalid

  Example: getGrade(95) -> "A+"
  Example: getGrade(82) -> "A"
  Example: getGrade(45) -> "Fail"
*/

const getGrade = (mark) => {
  // if (typeof mark != "number") {
  //   return "Invalid";
  // }

  // if (mark >= 90) {
  //   return "A+";
  // } else if (mark >= 80) {
  //   return "A";
  // } else if (mark >= 60) {
  //   return "B+";
  // } else {
  //   return "Fail";
  // }

  // Ternary operator -> condition ? true : false
  // Nested operator
  return typeof mark != "number"
    ? "Invalid"
    : mark >= 90
      ? "A+"
      : mark >= 80
        ? "A"
        : mark >= 60
          ? "B+"
          : "Fail";
};
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(45));
console.log(getGrade("Foysal"));
console.log(getGrade([]));
console.log(getGrade({}));
