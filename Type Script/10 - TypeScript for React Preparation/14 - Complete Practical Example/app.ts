// A practical example combining important TypeScript concepts.

interface User {
  id: number;
  name: string;
  email: string;
}

type RequestStatus = "idle" | "loading" | "success" | "error";

type ApiResponse<T> =
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      message: string;
    };

let requestStatus: RequestStatus = "idle";

async function getUsers(): Promise<ApiResponse<User[]>> {
  requestStatus = "loading";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: User[] = await response.json();

    requestStatus = "success";

    return {
      status: "success",
      data: users,
    };
  } catch (error: unknown) {
    requestStatus = "error";

    if (error instanceof Error) {
      return {
        status: "error",
        message: error.message,
      };
    }

    return {
      status: "error",
      message: "Unknown error",
    };
  }
}

async function showUsers(): Promise<void> {
  const response = await getUsers();

  if (response.status === "success") {
    response.data.forEach((user) => {
      console.log(user.name);
    });
  } else {
    console.log(response.message);
  }

  console.log(`Status: ${requestStatus}`);
}

showUsers();
