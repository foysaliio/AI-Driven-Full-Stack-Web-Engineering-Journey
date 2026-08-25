// satisfies checks whether a value matches a type
// while preserving useful inferred information.

type ThemeConfig = {
  theme: "light" | "dark";
  fontSize: number;
};

const config = {
  theme: "dark",
  fontSize: 16,
} satisfies ThemeConfig;

console.log(config.theme);
console.log(config.fontSize);

// TypeScript validates the object structure.

// This will produce a TypeScript error:

// const invalidConfig = {
//   theme: "blue",
//   fontSize: 16,
// } satisfies ThemeConfig;

// Practical example

type Route = "/" | "/about" | "/contact";

const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
} satisfies Record<string, Route>;

console.log(routes.home);
console.log(routes.about);
