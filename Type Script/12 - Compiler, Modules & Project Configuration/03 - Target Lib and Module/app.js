// Important compiler options:
//
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "lib": ["ES2020", "DOM"],
//     "module": "ESNext"
//   }
// }
// target controls the JavaScript version generated.
//
// lib controls which built-in APIs TypeScript knows about.
//
// module controls the generated module system.
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Button clicked");
});
const numbers = [10, 20, 30];
console.log(numbers);
export {};
//# sourceMappingURL=app.js.map