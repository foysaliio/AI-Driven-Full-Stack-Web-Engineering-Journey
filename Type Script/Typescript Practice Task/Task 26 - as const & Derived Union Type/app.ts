const appConfig = {
  theme: "dark",
  version: 2,
} as const;

console.log(appConfig.theme);
console.log(appConfig.version);

// Error: Cannot assign to 'theme' because it is a read-only property.
// appConfig.theme = "light";

const colors = ["red", "green", "blue"] as const;
console.log(typeof colors);

type Colors = (typeof colors)[number];

const color1: Colors = "red";
const color2: Colors = "green";
const color3: Colors = "blue";

console.log(color1);
console.log(color2);
console.log(color3);
