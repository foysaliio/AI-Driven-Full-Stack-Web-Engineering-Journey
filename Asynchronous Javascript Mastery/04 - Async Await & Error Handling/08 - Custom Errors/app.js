// Custom Error classes help us distinguish
// between different types of application errors.

class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = "ValidationError";
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);

    this.name = "AuthenticationError";
  }
}

async function loginUser(email, password) {
  if (!email) {
    throw new ValidationError("Email is required");
  }

  if (!password) {
    throw new ValidationError("Password is required");
  }

  if (email !== "foysal@gmail.com" || password !== "foysal123") {
    throw new AuthenticationError("Invalid login credentials");
  }

  return {
    id: 101,
    name: "Foysal",
  };
}

async function login() {
  try {
    const usre = await loginUser("sadik@gmail.com", "sadik123");

    console.log(user);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`Validation Error: ${error.message}`);
      return;
    }
    if (error instanceof AuthenticationError) {
      console.log(`Authentication Error: ${error.message}`);
      return;
    }

    console.log("Unknown error");
  }
}

login();
