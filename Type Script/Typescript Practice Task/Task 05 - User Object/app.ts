const userData: {
  fullName: string;
  email?: string | undefined;
} = {
  fullName: "Amina",
    // email: "amina@gmail.com",
};

console.log(
  `Name: ${userData.fullName}, Email: ${userData.email === undefined ? "Not provided" : userData.email}`,
);
