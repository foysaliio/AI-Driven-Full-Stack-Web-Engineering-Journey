const promoteEmployee = (employee, newTitle) => {
  return {
    ...employee,
    title: newTitle,
  };
};

const employee = {
  name: "Rafi",
  title: "Junior Dev",
};

console.log(promoteEmployee(employee, "Senior Dev"));

console.log(employee);
