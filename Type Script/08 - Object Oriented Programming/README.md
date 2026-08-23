# 08 - Object Oriented Programming

This module introduces Object Oriented Programming with TypeScript.

The goal is to understand how classes and objects can be used to organize data and behavior in a structured and reusable way.

---

## 01. Class Basics

A class is a blueprint for creating objects.

It defines the properties and methods that objects created from the class can have.

Objects are created from a class using the `new` keyword.

---

## 02. Constructor

A constructor is a special method that runs automatically when a new object is created.

It is commonly used to initialize the properties of an object.

The `this` keyword refers to the current object.

---

## 03. Properties and Methods

Properties represent the data or state of an object.

Methods represent the behavior or actions of an object.

OOP keeps related data and behavior together inside a class.

---

## 04. Access Modifiers

TypeScript provides access modifiers to control access to class members.

### public

A public member can be accessed from anywhere.

### private

A private member can only be accessed inside the class where it is defined.

### protected

A protected member can be accessed inside the class and its child classes.

Access modifiers help control how class data can be used.

---

## 05. Readonly Properties

The `readonly` keyword prevents a class property from being reassigned after initialization.

It is useful for values that should remain unchanged, such as identifiers.

---

## 06. Getters and Setters

Getters allow values to be accessed like properties.

Setters allow values to be updated while providing an opportunity to add validation or other logic.

They are useful when access to internal data needs to be controlled.

---

## 07. Static Members

Static properties and methods belong to the class itself rather than individual objects.

They can be accessed directly through the class name without creating an instance.

For example:

`MathHelper.square(5)`

---

## 08. Inheritance

Inheritance allows one class to reuse properties and methods from another class.

The `extends` keyword creates an inheritance relationship.

The child class can use existing functionality from the parent class and add its own functionality.

The `super` keyword is used to access the parent class constructor or methods.

---

## 09. Method Overriding

Method overriding happens when a child class provides its own implementation of a method inherited from the parent class.

The `override` keyword can be used to clearly indicate that a parent method is being overridden.

---

## 10. Encapsulation

Encapsulation means keeping internal data protected and providing controlled ways to access or modify it.

Private properties combined with public methods are a common way to implement encapsulation.

This helps prevent unwanted direct changes to internal data.

---

## 11. Polymorphism

Polymorphism allows different objects to respond to the same method in different ways.

A parent type can be used as a common type while child classes provide their own implementations.

For example, different animals can implement `makeSound()` differently.

---

## 12. Abstract Classes

An abstract class is a base class that cannot be instantiated directly.

It can contain common properties and methods while also defining abstract methods that child classes must implement.

Abstract classes are useful when several related classes should share a common structure.

---

## 13. Interfaces with Classes

A class can implement an interface using the `implements` keyword.

The class must satisfy the structure defined by the interface.

Interfaces act as contracts that describe what a class must contain.

---

## 14. Composition

Composition means building a class by using objects of other classes.

For example, a `Car` can contain an `Engine` object.

Composition represents a "has-a" relationship.

Inheritance often represents an "is-a" relationship.

Composition is useful for creating flexible and reusable application structures.
