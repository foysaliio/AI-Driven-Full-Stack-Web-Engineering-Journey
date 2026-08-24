"use strict";
// Enums allow us to define a set of named constants.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const userRole = Role.User;
console.log(userRole);
// String enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
    Status["Loading"] = "LOADING";
})(Status || (Status = {}));
const currentStatus = Status.Success;
console.log(currentStatus);
// Using enum in a function
function checkStatus(status) {
    if (status === Status.Success) {
        console.log("Operation successful");
    }
    if (status === Status.Error) {
        console.log("Operation failed");
    }
}
checkStatus(Status.Success);
