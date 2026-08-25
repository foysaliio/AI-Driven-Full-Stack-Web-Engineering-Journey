# 11 - Advanced Type Manipulation

This module focuses on creating, transforming, and deriving types using TypeScript's advanced type system.

## 01. Mapped Types

Mapped types create new types by transforming the properties of an existing type.

They commonly use `keyof` to access all keys of another type.

A mapped type can preserve or transform the original property types.

Many built-in TypeScript utility types are based on mapped type concepts.

## 02. Mapped Type Modifiers

Mapped types can add or remove property modifiers.

The `readonly` modifier can make properties readonly.

The `?` modifier can make properties optional.

Using `-readonly` removes readonly behavior.

Using `-?` removes optional behavior and makes properties required.

## 03. Conditional Types

Conditional types perform type-level decisions.

The basic syntax is:

`T extends SomeType ? TypeA : TypeB`

If `T` satisfies the condition, TypeScript returns `TypeA`.

Otherwise, it returns `TypeB`.

Conditional types are useful for creating reusable type logic.

## 04. Infer Keyword

The `infer` keyword allows TypeScript to capture a type from inside another type.

It is commonly used inside conditional types.

For example, it can extract the item type from an array or the return type from a function.

Many advanced utility types use similar techniques internally.

## 05. Exclude and Extract

`Exclude<T, U>` removes selected members from a union type.

`Extract<T, U>` keeps only members that match another type.

These utilities are useful when creating smaller or more specific union types.

## 06. Parameters Utility Type

`Parameters<T>` extracts the parameter types from a function.

The resulting type is represented as a tuple.

It allows an existing function's parameter structure to be reused.

## 07. Awaited Utility Type

`Awaited<T>` extracts the resolved value type from a Promise.

For example:

`Awaited<Promise<User>>`

produces:

`User`

It is useful when working with asynchronous functions and Promise-based data.

## 08. Template Literal Types

Template literal types create controlled string patterns from literal types.

They use syntax similar to JavaScript template literals.

For example:

`btn-${Size}`

can produce values such as:

`btn-small`

`btn-medium`

`btn-large`

TypeScript also provides string manipulation utility types such as `Capitalize`.

## 09. As Const

`as const` preserves exact literal values instead of widening them to broader types.

It also makes object properties and array elements readonly.

It is especially useful when creating literal unions from constant arrays or objects.

## 10. Satisfies Operator

The `satisfies` operator checks whether a value conforms to a specific type requirement.

It validates the structure while preserving useful inferred information from the original value.

It is useful for configuration objects, route maps, and other structured constant data.
