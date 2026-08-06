const buildProfileCard = (user) => {
  const { name, title, company } = user;
  const finalOutput = `${name}
${title} at ${company}`;
  return finalOutput;
};

console.log(
  buildProfileCard({
    name: "Arif",
    title: "Developer",
    company: "Programming Hero",
  }),
);
