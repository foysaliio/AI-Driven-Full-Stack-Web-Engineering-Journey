"use strict";
// These patterns prepare us for React,
// without requiring React knowledge yet.
// Nullable data
let selectedUser = null;
let status1 = "idle";
const handleDelete = (id) => {
    console.log(`Delete user: ${id}`);
};
function showUserCard(data) {
    console.log(data.user.name);
    console.log(data.isActive ?? false);
}
selectedUser = {
    id: 1,
    name: "Foysal",
};
status1 = "success";
showUserCard({
    user: selectedUser,
    isActive: true,
});
handleDelete(selectedUser.id);
console.log(status1);
