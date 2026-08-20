# 06 - Advanced Types & Type Narrowing

This module focuses on advanced TypeScript concepts that are useful when working with real-world applications.

The main topics are type assertions, type guards, discriminated unions, type operators, and exhaustive checking.

---

## 01. Type Assertions

Type assertion tells TypeScript how a value should be treated.

It does not change the actual value or convert its type at runtime.

It only gives TypeScript additional information about the value.

Type assertions are commonly used with `unknown` values and DOM elements.

---

## 02. Non Null Assertion

The non-null assertion operator `!` tells TypeScript that a value is not `null` or `undefined`.

It should be used carefully because TypeScript trusts the developer's statement.

If the value is actually `null` or `undefined` at runtime, an error can still occur.

---

## 03. Type Guards

Type guards are checks that help TypeScript narrow a value from a broader type into a more specific type.

Common type guards include:

- `typeof`
- `instanceof`
- `in`
- `Array.isArray()`
- Equality checks

Type guards are especially important when working with union types.

---

## 04. Custom Type Guards

TypeScript allows developers to create custom type guard functions.

A function can use a return type such as:

`value is SomeType`

This tells TypeScript that when the function returns `true`, the value can safely be treated as the specified type.

Custom type guards are useful when the same type-checking logic needs to be reused.

---

## 05. Discriminated Unions

A discriminated union is a union of object types that share a common property used to identify each type.

For example:

`status: "success"`

can identify a success response.

This pattern is very useful for:

- API responses
- Loading states
- Error states
- React state management

It allows TypeScript to narrow object types safely based on a shared property.

---

## 06. keyof Operator

The `keyof` operator creates a union of the property names of an object type.

For example:

`keyof User`

can produce:

`"name" | "age" | "email"`

This is useful when working with object keys in a type-safe way.

The `keyof` operator becomes especially important when working with generics.

---

## 07. typeof Type Operator

The `typeof` operator can be used in a type position to create a type from an existing variable.

For example:

`type User = typeof user`

allows TypeScript to derive the type from the existing `user` object.

This is useful when we already have a value and want to reuse its inferred structure as a type.

---

## 08. Indexed Access Types

Indexed access types allow us to access a specific property type from another type.

For example:

`User["name"]`

returns the type of the `name` property.

If `name` is a string, then:

`User["name"]`

is also `string`.

Indexed access types are useful for creating types based on existing structures.

---

## 09. never Type

The `never` type represents values that never occur.

A function that always throws an error or never finishes normally can have a return type of `never`.

`never` is different from `void`.

`void` means a function does not return a useful value.

`never` means the function does not reach a normal return point.

---

## 10. Exhaustive Checking

Exhaustive checking ensures that all possible cases of a union type are handled.

This is commonly implemented with a `never` type in the default branch of a switch statement.

It is useful because TypeScript can warn us when a new union case is added but not handled.

This makes application logic safer and easier to maintain.
