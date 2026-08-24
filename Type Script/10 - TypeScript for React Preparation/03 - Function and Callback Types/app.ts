// Functions and callbacks can have explicit types.

type ClickHandler = () => void;

const handleClick: ClickHandler = () => {
  console.log("Button clicked");
};

handleClick();

// Callback with a parameter

type SelectHandler = (id: number) => void;

const handleSelect: SelectHandler = (id) => {
  console.log(`Selected ID: ${id}`);
};

handleSelect(101);

// Passing a callback to another function

// const ranAction = (action: ClickHandler): void => {
//   action(); // Another way
// };

const ranAction = (action: () => void): void => {
  action();
};

ranAction(handleClick);
