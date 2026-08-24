# 09 - Advanced TypeScript & Practical Patterns

This module covers advanced and practical TypeScript concepts that are important before working with React and Next.js.

---

## 01. Function Types

Function types define the expected parameters and return type of a function.

A function type can be reused to describe callbacks and other function values.

---

## 02. Optional Parameters

Optional parameters are defined using `?`.

An optional parameter does not have to be provided when calling the function.

---

## 03. Default Parameters

Default parameters provide a fallback value when an argument is not provided.

---

## 04. Type Narrowing

Type narrowing allows TypeScript to reduce a broad type into a more specific type.

Common narrowing techniques include `typeof`, `instanceof`, equality checks, and property checks.

---

## 05. Type Guards

Type guards are checks that help TypeScript determine the specific type of a value.

Custom type guards can use the `value is Type` syntax.

---

## 06. Discriminated Unions

Discriminated unions use a common property to distinguish between multiple object types.

They are useful for handling different states and API responses safely.

---

## 07. Type Assertions

Type assertions tell TypeScript to treat a value as a specific type.

The `as` syntax is commonly used for assertions.

Type assertions do not change the actual runtime value.

---

## 08. Non Null Assertion

The `!` operator tells TypeScript that a value is not `null` or `undefined`.

It should be used carefully because TypeScript does not perform a runtime check when the assertion is used.

---

## 09. Never Type

The `never` type represents values that never occur.

It is commonly used for functions that always throw an error or never finish execution.

---

## 10. Enums

Enums provide a way to define a group of named constants.

They can be useful for representing a fixed set of related values.

String enums are often easier to understand and maintain than numeric enums.

---

## 11. Async TypeScript

Async functions can have explicitly typed Promise return values.

For example:

`Promise<User>`

means the Promise resolves to a `User`.

---

## 12. Promise Types

Promise types describe the value that will be available after an asynchronous operation completes.

For example:

`Promise<Product[]>`

represents a Promise that resolves to an array of `Product` objects.

---

## 13. Type Imports and Exports

Types can be exported from one module and imported into another.

`export` makes a type available to other modules.

`import type` imports types specifically for type checking.

This helps keep large TypeScript projects organized.

---

## 14. Practical TypeScript Patterns

Real applications often combine multiple TypeScript features.

Interfaces, generics, unions, discriminated unions, type narrowing, and Promise types can work together to create safe and maintainable application code.

These patterns are especially useful when working with API responses and application data.
