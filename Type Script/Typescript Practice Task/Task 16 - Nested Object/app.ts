const userData: {
  name: string;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Foysal",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(`Country: ${userData.address.country}`);
