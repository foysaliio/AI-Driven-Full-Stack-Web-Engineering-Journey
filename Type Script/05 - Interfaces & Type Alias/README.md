# 05 - Interfaces & Type Alias

This module focuses on interfaces, type aliases, inheritance, intersection types, and the differences between interfaces and type aliases.

---

## 01. Interface Basics

An interface defines the structure of an object.

It allows us to specify which properties an object should have and what types those properties should contain.

Once an interface is created, it can be reused by multiple objects that follow the same structure.

Interfaces are commonly used for defining object structures in TypeScript applications.

---

## 02. Optional Properties in Interface

Interface properties can be made optional using the `?` symbol.

For example:

`email?: string`

means the property can exist, but it is not required.

If the property is provided, it must still follow the specified type.

Optional properties are especially useful when defining flexible object structures and React props.

---

## 03. Readonly Properties in Interface

The `readonly` keyword prevents a property from being changed after the object has been initialized.

For example:

`readonly id: number`

means the ID can be read but cannot be reassigned later.

Readonly properties are useful when certain values should remain unchanged.

---

## 04. Interface with Functions

Interfaces can also describe the structure of functions.

An interface can define:

- The number of parameters
- The type of each parameter
- The return type

For example:

`(name: string) => string`

describes a function that accepts a string and returns a string.

This is useful when defining reusable function structures.

---

## 05. Interface with Arrays

An interface can be used as the type of objects stored inside an array.

For example:

`User[]`

means the array can contain multiple objects that follow the `User` interface.

This is very useful when working with lists of users, products, posts, or API data.

---

## 06. Extending Interfaces

One interface can extend another interface using the `extends` keyword.

The child interface automatically receives the properties of the parent interface.

The child interface can then add its own additional properties.

For example, a `Student` interface can extend a `Person` interface and add properties such as `studentId` and `course`.

This helps create reusable and organized object structures.

---

## 07. Multiple Interface Inheritance

An interface can extend multiple interfaces.

For example:

`interface User extends Person, Contact`

means the `User` interface receives the properties from both `Person` and `Contact`.

This allows multiple smaller interfaces to be combined into a larger structure.

---

## 08. Type Alias with Objects

A type alias can also be used to define the structure of an object.

For example:

`type Product = { ... }`

creates a reusable custom type that can be applied to multiple objects.

For basic object structures, both interfaces and type aliases can often achieve similar results.

---

## 09. Intersection Types

Intersection types combine multiple types into one type using the `&` operator.

For example:

`type User = Person & Contact`

means that `User` must contain all properties from both `Person` and `Contact`.

Intersection types are useful when multiple existing types need to be combined into one structure.

---

## 10. Interface vs Type Alias

Interfaces and type aliases can both be used to define object structures, but they have some important differences.

Interfaces are especially useful for defining object and class structures.

Interfaces also support declaration merging, meaning multiple declarations with the same interface name can be combined.

Type aliases are more flexible because they can represent more than object structures.

They can define:

- Objects
- Union types
- Intersection types
- Tuples
- Primitive aliases
- Function types

A simple way to remember the difference is:

Interface → Object and class structure

Type Alias → Flexible type definitions

Both are useful in React and TypeScript projects, and the choice often depends on the structure and purpose of the type.
