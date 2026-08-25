// This example combines the major TypeScript concepts
// learned throughout the journey.

interface User {
  readonly id: number;
  name: string;
  email: string;
  role: UserRole;
}

type UserRole = "admin" | "user";

type RequestState<T> =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      message: string;
    };

type UserPreview = Pick<User, "id" | "name" | "role">;

async function fetchUsers(): Promise<RequestState<User[]>> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data: User[] = await response.json();

    return {
      status: "success",
      data,
    };
  } catch (error: unknown) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

function getPreview(user: User): UserPreview {
  return {
    id: user.id,
    name: user.name,
    role: user.role,
  };
}

function handleState(state: RequestState<User[]>): void {
  switch (state.status) {
    case "idle":
      console.log("Waiting...");
      break;

    case "loading":
      console.log("Loading...");
      break;

    case "success":
      state.data.forEach((user) => {
        console.log(getPreview(user));
      });
      break;

    case "error":
      console.log(state.message);
      break;
  }
}

console.log("TypeScript journey completed");
