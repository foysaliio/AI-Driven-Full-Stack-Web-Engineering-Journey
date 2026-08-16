# 02 - Objects & Arrays

This module focuses on working with objects and arrays in TypeScript.

The main goal is to understand how TypeScript can define the structure and types of data inside objects and arrays.

---

## 01. Object Types

In TypeScript, we can define the type of each property inside an object.

For example, if an object has a `name`, `age`, and `isStudent` property, we can specify that:

- `name` must be a string
- `age` must be a number
- `isStudent` must be a boolean

This makes the structure of the object clear and helps TypeScript catch incorrect values.

Object types are very useful when working with structured data in real projects.

---

## 02. Optional Properties

Not every property of an object is always required.

We can make a property optional by using the `?` symbol after the property name.

For example:

`email?: string`

This means the `email` property can exist, but it does not have to exist.

Optional properties are very common in React props because sometimes a component may receive a particular piece of data and sometimes it may not.

---

## 03. Readonly Properties

The `readonly` keyword prevents a property from being changed after it has been initialized.

For example, if a user's `id` is marked as `readonly`, we cannot assign a new value to that ID later.

Other properties that are not marked as `readonly` can still be changed normally.

Readonly is useful when certain data should remain unchanged after it is created.

---

## 04. Nested Objects

An object can contain another object as one of its properties.

For example, a user object can contain an `address` object.

The nested object's properties also need their own types.

This is called a nested object.

Nested objects are very common when working with real-world data such as users, products, orders, API responses, and other structured data.

---

## 05. Array Types

TypeScript allows us to define what type of values an array can contain.

For example:

`number[]`

means the array can only contain numbers.

Similarly:

`string[]`

means the array can only contain strings.

If we try to add a value with the wrong type, TypeScript will show an error.

This helps keep array data consistent and prevents unexpected values.

---

## 06. Array of Objects

An array can contain multiple objects with the same structure.

For example, an array of users can contain multiple user objects where every user has properties such as:

- `name`
- `age`
- `isActive`

TypeScript allows us to define the structure of those objects inside the array.

This pattern is extremely common when working with API data.

For example, an API may return a list of users, products, posts, or orders.

---

## 07. Tuples

A tuple is similar to an array, but the number of elements and their positions can have specific types.

For example:

`[string, number]`

means:

- The first value must be a string
- The second value must be a number

The order also matters.

So `[string, number]` is valid, but `[number, string]` is not.

Tuples are useful when we need a small collection of values where every position has a specific meaning and type.

---

## 08. Union Types in Arrays

Union types can also be used inside arrays.

For example:

`(string | number)[]`

means the array can contain both strings and numbers.

The array can contain:

- strings
- numbers

But it cannot contain other types such as booleans unless they are also included in the union.

Union types are useful when an array legitimately needs to contain more than one type of value.

---

## 09. Type Aliases with Objects

A type alias allows us to create a reusable custom type.

Instead of repeatedly writing the complete structure of an object, we can define that structure once and give it a name.

For example, we can create a `User` type containing:

- `name`
- `age`
- `email`
- `isActive`

Then we can use `User` for multiple objects.

This makes the code cleaner, easier to maintain, and easier to reuse.

Type aliases become especially important when working with larger and more complex data structures.