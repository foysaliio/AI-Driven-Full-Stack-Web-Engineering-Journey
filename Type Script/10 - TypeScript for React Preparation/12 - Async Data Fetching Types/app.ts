// Async functions return Promises.

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(): Promise<User> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  const data: User = await response.json();
  return data;
}

async function showUser(): Promise<void> {
  try {
    const user = await fetchUser();
    console.log(user.name);
    console.log(user.email);
  } catch (error) {
    console.log(error);
  }
}

showUser();
