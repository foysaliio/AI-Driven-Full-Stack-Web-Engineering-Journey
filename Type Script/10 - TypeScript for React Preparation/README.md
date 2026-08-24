# 10 - TypeScript for React Preparation

This module connects the TypeScript concepts learned so far with patterns commonly used in React and Next.js applications.

The goal is not to learn React yet, but to understand how TypeScript is used with application data, callbacks, events, state-like values, API responses, and asynchronous operations.

## 01. Typing Object Data

Interfaces and type aliases can define reusable structures for application data.

Objects such as users, products, posts, and orders can have clearly defined types.

## 02. Typing Array Data

Arrays of objects can use reusable types such as `User[]` or `Product[]`.

TypeScript can then understand the structure of every item while using array methods.

## 03. Function and Callback Types

Functions can be typed based on their parameters and return values.

Callback types are especially important when functions are passed between different parts of an application.

## 04. Reusable Props Like Types

Object types can describe structured data passed into functions.

The same concept is later used when typing React component props.

## 05. Children Like Types

Nested or child content can also have specific types.

React provides its own types for component children, which can be learned when working with React.

## 06. Event Types

Browser events have specific types such as `MouseEvent` and `KeyboardEvent`.

Typed events provide safe access to event properties.

## 07. Form Input Types

HTML elements have specific DOM types.

Examples include `HTMLInputElement`, `HTMLFormElement`, and `HTMLButtonElement`.

These types allow TypeScript to understand element-specific properties.

## 08. State Like Union Types

Literal union types can represent a limited set of application states.

For example:

`"idle" | "loading" | "success" | "error"`

This prevents invalid state values.

## 09. Nullable Data Types

Application data may not always be immediately available.

Types such as `User | null` safely represent data that may be missing temporarily.

## 10. API Response Types

API responses can have their own structures.

Typing the complete response helps keep application data predictable.

## 11. Generic API Response

Generics allow one reusable API response structure to work with different data types.

For example:

`ApiResponse<User>`

`ApiResponse<Product>`

`ApiResponse<User[]>`

## 12. Async Data Fetching Types

Async functions return Promises.

`Promise<User>` means that an asynchronous operation resolves to a `User`.

External API data may require runtime validation because TypeScript types do not validate runtime values automatically.

## 13. Error Handling with Unknown

`unknown` is safer than `any` when the type of an error or external value is uncertain.

The value must be narrowed before type-specific properties can be accessed.

## 14. Complete Practical Example

Real applications combine multiple TypeScript concepts.

Interfaces, unions, generics, discriminated unions, Promise types, type narrowing, and unknown values can work together to create a safe and predictable data flow.
