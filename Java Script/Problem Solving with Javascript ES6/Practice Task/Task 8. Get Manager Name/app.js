const getManagerName = (employee) => {
  return employee.manager?.name;
};
console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }));
console.log(getManagerName({ name: "Rafi" }));
