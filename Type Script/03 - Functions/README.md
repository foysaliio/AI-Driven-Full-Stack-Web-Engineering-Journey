# 03 - Functions

This module focuses on defining and working with functions in TypeScript.

---

## 01. Function Parameter Types

TypeScript allows us to define what type of value a function parameter should accept.

For example, a parameter typed as `string` can only receive a string value.

Similarly, a parameter typed as `number` can only receive a number.

This helps prevent incorrect values from being passed to functions and makes the expected input of a function clear.

---

## 02. Function Return Types

TypeScript also allows us to define what type of value a function should return.

For example:

`(): number`

means the function should return a number.

Return types make the expected output of a function clear and help TypeScript catch incorrect return values.

TypeScript can often infer a function's return type automatically, but explicitly defining it can make the function's behavior clearer.

---

## 03. Arrow Function Types

Arrow functions can use TypeScript types in the same way as regular functions.

Parameters can have explicit types, and the return type can also be defined.

This is especially important when working with React because arrow functions are commonly used for event handlers, callbacks, utility functions, and component-related logic.

---

## 04. Optional Parameters

A function parameter can be made optional by using the `?` symbol.

For example:

`age?: number`

means the function can receive an age, but it does not have to.

If the parameter is provided, it must be a number.

Optional parameters are useful when a function can work with or without certain information.

---

## 05. Default Parameters

A default parameter provides a fallback value when an argument is not provided.

For example:

`country: string = "Bangladesh"`

means that if the caller does not provide a country, `"Bangladesh"` will be used automatically.

Default parameters are useful when a function has a common default behavior.

---

## 06. Function Types

A function type describes the complete structure of a function.

For example:

`(a: number, b: number) => number`

means the function must:

- accept two number parameters
- return a number

Function types are useful when storing functions in variables or when one function needs to accept another function as an argument.

This concept becomes very important when working with callbacks and React function props.

---

## 07. Callback Functions

A callback function is a function passed as an argument to another function.

TypeScript allows us to define the type of that callback.

For example:

`(value: number) => number`

means the callback must accept a number and return a number.

Callbacks are already common in JavaScript, and TypeScript adds type safety to them.

---

## 08. Void Type

The `void` type is commonly used for functions that do not return a value.

For example:

`(): void`

means the function does not return a meaningful value.

Functions that only perform an action, such as logging a message, commonly use `void`.

---

## 09. Never Type

The `never` type represents a situation where a function never normally returns a value.

A common example is a function that always throws an error.

Another example is a function that contains an infinite loop and therefore never finishes normally.

`never` is different from `void`.

`void` means the function finishes without returning a value.

`never` means the function does not normally reach a return point.
