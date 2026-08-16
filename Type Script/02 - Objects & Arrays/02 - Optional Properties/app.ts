// The ? symbol makes an object property optional.

const studentData: {
  firstName: string;
  age: number;
  idCardNumber: number;
  isRegular: boolean;
  location?: string;
} = {
  firstName: "Foysal",
  age: 23,
  idCardNumber: 23839284,
  isRegular: true,
  // location: "Dhaka",
};

console.log(studentData);
console.log(studentData.age);
console.log(studentData.isRegular);
console.log(studentData.location); // location can be added later

studentData.location = "Narayanganj,Dhaka";

console.log(studentData.location);
