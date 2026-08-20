// Exhaustive checking makes sure all possible union cases are handled.

type Status = "success" | "error" | "loading";

function checkStatus(status: Status): string {
  switch (status) {
    case "success":
      return "Operation successful";

    case "error":
      return "Something went wrong";

    case "loading":
      return "Loading...";

    default:
      return neverReached(status);
  }
}

function neverReached(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

console.log(checkStatus("success"));
console.log(checkStatus("error"));
console.log(checkStatus("loading"));
