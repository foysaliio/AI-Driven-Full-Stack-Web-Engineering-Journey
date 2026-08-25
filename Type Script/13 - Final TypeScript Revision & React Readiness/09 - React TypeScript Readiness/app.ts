// These patterns prepare us for React,
// without requiring React knowledge yet.

// Object data

type User = {
  id: number;
  name: string;
};

// Props-like object

type UserCardData = {
  user: User;
  isActive?: boolean;
};

// Callback-like function

type DeleteHandler = (id: number) => void;

// State-like value

type RequestStatus = "idle" | "loading" | "success" | "error";

// Nullable data

let selectedUser: User | null = null;

let status1: RequestStatus = "idle";

const handleDelete: DeleteHandler = (id) => {
  console.log(`Delete user: ${id}`);
};

function showUserCard(data: UserCardData): void {
  console.log(data.user.name);
  console.log(data.isActive ?? false);
}

selectedUser = {
  id: 1,
  name: "Foysal",
};

status1 = "success";

showUserCard({
  user: selectedUser,
  isActive: true,
});

handleDelete(selectedUser.id);

console.log(status1);
