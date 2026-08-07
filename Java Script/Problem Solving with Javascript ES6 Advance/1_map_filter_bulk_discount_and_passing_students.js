/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

let applyDiscount = (prices, discountRate = 0) => {
  let pricesAfterDiscount = prices.map((elem, ind, arr) => {
    const discountedPrice = elem - (elem * discountRate) / 100;
    return discountedPrice;
  });
  return pricesAfterDiscount;
};
let productPrices = [500, 1000, 250, 400, 700];
console.log(applyDiscount(productPrices, 10));
console.log(productPrices);

/*
  Problem 2: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/

let getPassingStudents = (students, threshold) => {
  let filteredStudents = students.filter((student) => {
    // console.log(student);

    // if(student.marks>=threshold){
    //   return true;
    // }else{
    //   return false;
    // }
    return student.marks >= threshold;
  });
  return filteredStudents;
};

let students = [
  { name: "Rafi", marks: 75 },
  { name: "Karim", marks: 40 },
  { name: "Foysal", marks: 80 },
  { name: "Akash", marks: 59 },
];
console.log(getPassingStudents(students, 60));
