// Async functions can have typed return values.

interface User {
  id: number;
  name: string;
}

async function getUser(): Promise<User> {
  return {
    id: 1,
    name: "Foysal",
  };
}

async function showUser(): Promise<void> {
  const user = await getUser();

  console.log(user.id);
  console.log(user.name);
}

showUser();
