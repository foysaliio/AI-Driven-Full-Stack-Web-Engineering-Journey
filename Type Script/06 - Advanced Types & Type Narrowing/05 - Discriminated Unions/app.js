"use strict";
// Discriminated unions use a common property
// to identify different object types.
function handleResponse(response) {
    if (response.status === "success") {
        console.log(`Data: ${response.data}`);
    }
    else if (response.status === "error") {
        console.log(`Error: ${response.message}`);
    }
    else {
        console.log("Loading...");
    }
}
handleResponse({
    status: "success",
    data: "User data loaded",
});
handleResponse({
    status: "error",
    message: "Something went wrong",
});
handleResponse({
    status: "loading",
});
