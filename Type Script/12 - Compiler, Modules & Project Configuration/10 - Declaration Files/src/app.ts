// Declaration files use the .d.ts extension.
//
// Example:
//
// global.d.ts
//
// declare const APP_VERSION: string;
//
// declare function showNotification(
//   message: string
// ): void;

// TypeScript can use declarations
// to understand JavaScript libraries or global values
// that do not provide their own TypeScript types.

declare const APP_NAME: string;

// TypeScript now knows APP_NAME is a string.

// console.log(APP_NAME.toUpperCase());
