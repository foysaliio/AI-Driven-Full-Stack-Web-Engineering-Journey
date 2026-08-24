// Discriminated unions use a common property
// to identify different object types.

interface SuccessResponse {
  status: "success";
  data: string;
}

interface ErrorResponse {
  status: "error";
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): void {
  if (response.status === "success") {
    console.log(response.data);
  } else {
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
