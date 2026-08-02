const extractUserInfo = (obj) => {
  if (!obj?.user?.name) {
    return "Invalid";
  }
  const {
    user: { name: objName, age },
    hobbies,
  } = obj;
  const [firstHobbies = "nothing yet"] = hobbies;
  return `${objName} (${age}) likes ${firstHobbies}`;
};

console.log(
  extractUserInfo({
    user: { name: "Sadia", age: 22 },
    hobbies: ["reading", "coding"],
  }),
);

console.log(extractUserInfo({ user: { name: "Rafi", age: 19 }, hobbies: [] }));

console.log(extractUserInfo({ user: { age: 30 }, hobbies: [] }));
