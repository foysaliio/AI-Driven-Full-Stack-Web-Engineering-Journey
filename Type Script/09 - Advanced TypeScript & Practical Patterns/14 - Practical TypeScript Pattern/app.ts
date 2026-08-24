// Combining interfaces, unions, generics,
// type narrowing, and async TypeScript.

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
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

async function getUser(): Promise<ApiResponse<User>> {
  return {
    status: "success",
    data: {
      id: 1,
      name: "Foysal",
    },
  };
}

async function showUser(): Promise<void> {
  const response = await getUser();

  if (response.status === "success") {
    console.log(response.data.name);
  } else {
    console.log(response.message);
  }
}

showUser();
