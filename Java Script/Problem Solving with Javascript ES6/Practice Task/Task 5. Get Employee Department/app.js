const getEmployeeDept = (employee) => {
  const {
    job: { title, department },
  } = employee;

  // return `{title: ${title} department: ${department}}`; // Old way
  return { title, department }; // Modern way
};

console.log(
  getEmployeeDept({
    name: "Nadia",
    job: { title: "PM", department: "Product" },
  }),
);
