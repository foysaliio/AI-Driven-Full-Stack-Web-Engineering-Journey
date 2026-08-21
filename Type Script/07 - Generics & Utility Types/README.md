# 07 - Generics & Utility Types

This module focuses on generics and commonly used TypeScript utility types.

Generics allow reusable code to remain type-safe, while utility types help create new types from existing types.

---

## 01. Generic Basics

Generics allow us to write reusable code without losing type safety.

A generic type parameter such as `T` represents a type that can be determined later.

For example:

`function getValue<T>(value: T): T`

The same function can work with strings, numbers, booleans, or other types while preserving the original type.

---

## 02. Generic Functions

Generic functions can work with multiple types while maintaining the relationship between input and output types.

For example, a generic function that receives an array and returns its first item can automatically return the correct item type.

This allows one function to safely work with many different types.

---

## 03. Multiple Generics

A generic function can have multiple type parameters.

For example:

`<T, U>`

allows a function to work with two potentially different types.

This is useful when multiple inputs have different types and their relationship needs to be preserved.

---

## 04. Generic Constraints

Generic constraints restrict which types can be used with a generic.

The `extends` keyword can define requirements for the generic type.

For example:

`T extends { length: number }`

means that `T` must contain a `length` property whose type is number.

Constraints provide flexibility while still maintaining type safety.

---

## 05. keyof with Generics

The `keyof` operator can be combined with generics to safely work with object properties.

For example:

`K extends keyof T`

means that `K` must be a valid key of type `T`.

This prevents invalid property names from being passed to a function.

This pattern is important when creating reusable type-safe functions.

---

## 06. Generic Interfaces

Interfaces can also use generic type parameters.

For example:

`interface ApiResponse<T>`

creates a reusable response structure where the type of `data` can be specified later.

This is particularly useful when working with different API response structures.

---

## 07. Partial

`Partial<T>` makes all properties of a type optional.

If a type contains several required properties, `Partial` allows us to create a version where none of those properties are required.

It is commonly useful for update operations where only some properties need to be changed.

---

## 08. Required

`Required<T>` makes all properties of a type required.

It is useful when an existing type contains optional properties but a specific part of the application requires every property to be present.

---

## 09. Pick and Omit

`Pick<T, K>` creates a new type containing only selected properties from an existing type.

`Omit<T, K>` creates a new type containing all properties except the selected ones.

For example:

`Pick<User, "name" | "email">`

keeps only `name` and `email`.

`Omit<User, "password">`

removes the `password` property.

These utility types are very useful when shaping API data and application models.

---

## 10. Readonly

`Readonly<T>` makes all properties of a type readonly.

This prevents the properties from being reassigned after initialization.

It is useful when an object should not be modified.

---

## 11. Record

`Record<K, T>` creates an object type with a specific key type and value type.

For example:

`Record<string, number>`

represents an object whose keys are strings and whose values are numbers.

Record is useful for dictionaries, lookup objects, mappings, and structured collections of key-value pairs.

---

## 12. ReturnType

`ReturnType<T>` extracts the return type of a function.

For example:

`ReturnType<typeof getUser>`

creates a type based on whatever `getUser` returns.

This allows existing function return types to be reused without manually recreating the same structure.
