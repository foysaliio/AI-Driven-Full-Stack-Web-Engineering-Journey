// Interfaces can also use generics.

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

const userResponse: ApiResponse<{
  name: string;
  age: number;
}> = {
  success: true,
  data: {
    name: "Foysal",
    age: 22,
  },
  message: "User loaded successfully",
};

console.log(userResponse.data.name);
console.log(userResponse.data.age);

// Another example

interface ApiListResponse<T> {
  success: boolean;
  data: T[];
  total: number;
}

const usersResponse: ApiListResponse<string> = {
  success: true,
  data: ["Foysal", "Rahim", "Karim"],
  total: 3,
};

console.log(usersResponse.data);
