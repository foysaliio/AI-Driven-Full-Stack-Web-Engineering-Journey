# 01 - TypeScript Foundation

This module covers the fundamental concepts of TypeScript.

The main goal is to understand how TypeScript adds static typing to JavaScript and how different types can be defined, inferred, combined, and reused.

---

## 01. What is TypeScript?

TypeScript is a superset of JavaScript that adds a static type system.

It helps developers catch type-related errors during development before the code runs.

TypeScript code is compiled into JavaScript before it can run in the browser.

The main benefit is that developers can define what kind of data a variable should contain and get better error checking during development.

---

## 02. TypeScript vs JavaScript

JavaScript is dynamically typed, which means a variable can hold different types of values during runtime.

TypeScript allows developers to explicitly define the expected type of a value.

For example, a variable can be defined as a `number`, and TypeScript will prevent assigning a string to that variable.

This makes code more predictable and helps catch mistakes earlier.

---

## 03. Type Annotation

Type annotation means explicitly specifying the type of a variable.

For example:

`let age: number = 22;`

Here, `number` is the type annotation.

Type annotations can be used with common types such as:

- string
- number
- boolean

Type annotations are useful when we want to clearly define what type of data a variable should contain.

---

## 04. Type Inference

Type inference means TypeScript automatically determines the type of a variable based on its initial value.

For example:

`let username = "Foysal";`

TypeScript understands that `username` is a string even though we did not explicitly write `: string`.

Similarly:

- `"Foysal"` → string
- `22` → number
- `true` → boolean

Type inference allows us to write cleaner code without unnecessarily adding type annotations everywhere.

---

## 05. Primitive Types

Primitive types are the basic types of values used in TypeScript.

Some important primitive types are:

- string
- number
- boolean
- null
- undefined

Understanding these types is essential because more advanced TypeScript types are built around these basic concepts.

---

## 06. String

The `string` type represents text.

Examples include:

- names
- emails
- addresses
- messages
- titles

A variable typed as `string` should only contain text values.

---

## 07. Number

The `number` type is used for numeric values.

TypeScript uses the same `number` type for both integers and decimal numbers.

Examples:

- age
- price
- score
- quantity

For example:

`22` → number

`499.99` → number

---

## 08. Boolean

The `boolean` type can only contain two values:

- true
- false

Booleans are commonly used for conditions and states.

Examples:

- `isLoggedIn`
- `isAdmin`
- `isActive`
- `isAvailable`

---

## 09. Null

`null` represents an intentional absence of a value.

It is commonly used when we intentionally want to indicate that a value is currently empty or has no value.

For example:

`let selectedUser: null = null;`

---

## 10. Undefined

`undefined` generally represents a value that has not been assigned.

For example, a variable or property may have the value `undefined` when no value has been provided.

Understanding the difference between `null` and `undefined` is important when working with JavaScript and TypeScript.

---

## 11. Any

The `any` type allows a variable to contain values of any type.

For example, a variable typed as `any` can hold:

- number
- string
- boolean
- array
- object

However, `any` disables most TypeScript type checking.

Because of this, `any` should generally be avoided unless there is a good reason to use it.

---

## 12. Unknown

The `unknown` type is used when the type of a value is not known yet.

It is safer than `any`.

A value with the `unknown` type cannot be used as a specific type until TypeScript confirms what type it is.

For example, before using a string method on an `unknown` value, we can check its type using `typeof`.

This makes `unknown` useful when dealing with data whose type is uncertain, such as external or API data.

---

## 13. Union Types

A union type allows a value to have more than one possible type.

The `|` symbol is used to create a union.

For example:

`string | number`

means the value can be either a string or a number.

Union types are useful when a value can legitimately have different types depending on the situation.

---

## 14. Literal Types

A literal type allows a variable to accept only specific values.

For example:

`"success" | "error" | "loading"`

means the variable can only contain one of those three exact values.

Literal types are useful when we have a fixed set of allowed values, such as:

- status
- role
- theme
- state
- category

They are especially useful in application development because they provide stronger type safety.

---

## 15. Type Aliases

A type alias allows us to create a custom name for a type.

For example:

`type UserId = string | number;`

Now `UserId` can be reused anywhere we need a value that can be either a string or a number.

Type aliases become even more useful when creating complex object types.

They help make TypeScript code cleaner, reusable, and easier to maintain.
