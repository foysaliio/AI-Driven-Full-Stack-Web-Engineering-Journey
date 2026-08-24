// Browser events have their own types.

const handleClick = (event: MouseEvent): void => {
  console.log(event.type);
  console.log(event.clientX);
  console.log(event.clientY);
};

document.addEventListener("click", handleClick);

// Keyboard event

const handleKeyDown = (event: KeyboardEvent): void => {
  console.log(event.key);
};

document.addEventListener("keydown", handleKeyDown);
