// API data should have known structures.

interface User {
  id: number;
  name: string;
  email: string;
}

type ApiResponse<T> =
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      message: string;
    };

async function fetchUsers(): Promise<ApiResponse<User[]>> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: User[] = await response.json();

    return {
      status: "success",
      data: users,
    };
  } catch (error: unknown) {
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
  const response = await fetchUsers();

  if (response.status === "success") {
    response.data.forEach((user) => {
      console.log(user.name);
    });

    return;
  }

  console.log(response.message);
}

showUsers();
