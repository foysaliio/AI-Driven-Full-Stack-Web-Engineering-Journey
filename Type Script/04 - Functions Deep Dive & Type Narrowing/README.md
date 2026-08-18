# 04 - Functions Deep Dive & Type Narrowing

This module builds on the basic function concepts from the previous module.

The focus is on more practical function patterns, reusable function types, and type narrowing.

---

## 01. Function Expressions

A function expression stores a function inside a variable.

TypeScript allows us to define the parameter types and return type of the function expression.

Function expressions are another way of creating functions in JavaScript and are useful for understanding how functions can be treated as values.

---

## 02. Arrow Function Return Inference

TypeScript can automatically infer the return type of an arrow function.

If the parameter types are known and TypeScript can determine what the function returns, an explicit return type may not always be necessary.

For example, if a function adds two numbers, TypeScript can understand that its return type is `number`.

This is an example of type inference working with functions.

---

## 03. Rest Parameters

Rest parameters allow a function to accept multiple arguments and collect them into an array.

In TypeScript, the type of the rest parameter should also be defined.

For example:

`...prices: number[]`

means the function can receive multiple number arguments and all of them will be available as a number array.

Rest parameters are useful when the number of arguments is not fixed.

---

## 04. Destructuring Parameters

Objects can be destructured directly inside function parameters.

When using TypeScript, the structure of the destructured object needs to be typed.

This is especially useful when working with objects that contain multiple properties.

It is also a common pattern in React when destructuring component props.

---

## 05. Function Type Aliases

A function type can be stored inside a type alias and reused.

For example:

`type Calculator = (a: number, b: number) => number`

This describes a function that accepts two numbers and returns a number.

Multiple functions can then use the same function type.

This makes function types reusable and keeps code cleaner.

---

## 06. Type Narrowing with typeof

Type narrowing allows TypeScript to determine a more specific type inside a condition.

The `typeof` operator can be used to narrow primitive types such as strings and numbers.

For example, when a value has the type:

`string | number`

TypeScript cannot initially know which type it contains.

After checking:

`typeof value === "string"`

TypeScript knows that the value is a string inside that block.

This is an important concept when working with union types.

---

## 07. Type Narrowing with in

The `in` operator can be used to narrow object types by checking whether a specific property exists.

For example, if two object types have different properties, checking:

`"permissions" in user`

can help TypeScript determine which object type is currently being used.

This is useful when working with different object structures that share some common properties.

---

## 08. Type Narrowing with Equality

Equality checks can also narrow types.

This is especially useful with literal types and union types.

For example:

`"success" | "error" | "loading"`

can be narrowed by checking:

`status === "success"`

TypeScript understands which specific value is being handled inside each condition.

This pattern is very useful when managing different application states.

---

## 09. Function Overloads

Function overloads allow us to define multiple valid call signatures for the same function.

For example, a function can be designed to accept a string and return a string, or accept a number and return a number.

The overload signatures describe the valid ways the function can be called, while the implementation handles the actual logic.

Function overloads are useful when a function needs to support multiple related input and output combinations.

They are a more advanced TypeScript feature, so understanding the concept is more important than memorizing the syntax at this stage.