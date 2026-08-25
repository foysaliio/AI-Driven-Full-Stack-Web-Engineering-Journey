// Template literal types create controlled
// string patterns using literal types.

type Size = "small" | "medium" | "large";

type ButtonClass = `btn-${Size}`;

const smallButton: ButtonClass = "btn-small";

const largeButton: ButtonClass = "btn-large";

console.log(smallButton);
console.log(largeButton);

// This will produce a TypeScript error:

// const invalidButton: ButtonClass = "btn-extra";

// Another example

type EventName = "click" | "change" | "submit";

type EventHandler = `on${Capitalize<EventName>}`;

const clickHandler: EventHandler = "onClick";
const submitHandler: EventHandler = "onSubmit";

console.log(clickHandler);
console.log(submitHandler);
