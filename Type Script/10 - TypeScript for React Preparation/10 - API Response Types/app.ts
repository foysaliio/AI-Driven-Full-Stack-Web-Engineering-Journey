// API response structures should be typed.

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserResponse {
  success: boolean;
  data: User;
}

const response: UserResponse = {
  success: true,
  data: {
    id: 1,
    name: "Foysal",
    email: "foysal77@gmail.com",
  },
};

console.log(response.data.name);

// Array response

interface UsersResponse {
  success: boolean;
  data: User[];
}

const usersResponse: UsersResponse = {
  success: true,
  data: [
    {
      id: 1,
      name: "Foysal",
      email: "foysal77@gmail.com",
    },
    {
      id: 2,
      name: "Sadik",
      email: "sadik77@gmail.com",
    },
  ],
};
console.log(usersResponse.data);
