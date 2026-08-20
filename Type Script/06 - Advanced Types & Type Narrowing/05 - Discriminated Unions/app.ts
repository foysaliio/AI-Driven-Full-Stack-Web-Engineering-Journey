// Discriminated unions use a common property
// to identify different object types.

type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type LoadingResponse = {
  status: "loading";
};

type ApiResponse = SuccessResponse | ErrorResponse | LoadingResponse;

function handleResponse(response: ApiResponse): void {
  if (response.status === "success") {
    console.log(`Data: ${response.data}`);
  } else if (response.status === "error") {
    console.log(`Error: ${response.message}`);
  } else {
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
