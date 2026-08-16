// An object can contain another object as a property.

const myData: {
  fullName: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    zipCode: number;
    hasOwnHouse: boolean;
  };
} = {
  fullName: "Foysal Hossien",
  age: 23,
  isStudent: true,
  address: {
    city: "Dhaka",
    zipCode: 1207,
    hasOwnHouse: false,
  },
};

console.log(myData);
console.log(myData.address.hasOwnHouse);
console.log(myData.isStudent);
console.log(myData.address.city);
