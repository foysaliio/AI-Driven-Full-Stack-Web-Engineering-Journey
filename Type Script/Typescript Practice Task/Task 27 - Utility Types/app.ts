interface Employee {
  name: string;
  id: number;
  salary: number;
  department: string;
}

/// Partial

const updateEmployee = (employee: Partial<Employee>) => {
  return employee;
};

console.log(updateEmployee({ name: "Rafi" }));

/// Pick

type EmployeeBasicInfo = Pick<Employee, "name" | "id">;

const employeeInfo: EmployeeBasicInfo = {
  name: "Rafi",
  id: 1,
};

console.log(employeeInfo);

/// Omit

type EmployeeWithoutSalary = Omit<Employee, "salary">;
const employeeData: EmployeeWithoutSalary = {
  name: "Rafi",
  id: 1,
  department: "IT",
};
console.log(employeeData);