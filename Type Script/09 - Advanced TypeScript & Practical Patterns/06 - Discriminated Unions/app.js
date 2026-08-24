"use strict";
// Discriminated unions use a common property
// to identify different object types.
function handleResponse(response) {
    if (response.status === "success") {
        console.log(response.data);
    }
    else {
        console.log(response.message);
    }
}
handleResponse({
    status: "success",
    data: "User loaded successfully",
});
handleResponse({
    status: "error",
    message: "Something went wrong",
});
