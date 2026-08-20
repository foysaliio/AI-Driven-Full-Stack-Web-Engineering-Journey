interface HasId {
  id: number;
}

const findById = <T extends HasId>(items: T[], id: number): T | undefined => {
  return items.find((item) => item.id === id);
};

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

console.log(findById(users, 2));

// Error: Property 'id' is missing
// findById([{ name: "C" }], 3);
