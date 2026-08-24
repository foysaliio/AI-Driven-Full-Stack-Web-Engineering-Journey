// Generics make API response types reusable.

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Foysal",
  },
  message: "User loaded successfully",
};

const productResponse: ApiResponse<Product> = {
  success: true,
  data: {
    id: 101,
    name: "Laptop",
    price: 75000,
  },
  message: "Product loaded successfully",
};

const usersResponse: ApiResponse<User[]> = {
  success: true,
  data: [
    {
      id: 1,
      name: "Foysal",
    },
    {
      id: 2,
      name: "Sadik",
    },
  ],
  message: "Users loaded successfully",
};

console.log(userResponse.data);
console.log(productResponse.data);
console.log(usersResponse.data);
