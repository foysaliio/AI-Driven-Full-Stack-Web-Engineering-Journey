// Enums allow us to define a set of named constants.

enum Role {
  Admin,
  User,
  Guest,
}

const userRole: Role = Role.User;

console.log(userRole);

// String enum

enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
}

const currentStatus: Status = Status.Success;

console.log(currentStatus);

// Using enum in a function

function checkStatus(status: Status): void {
  if (status === Status.Success) {
    console.log("Operation successful");
  }

  if (status === Status.Error) {
    console.log("Operation failed");
  }
}

checkStatus(Status.Success);
