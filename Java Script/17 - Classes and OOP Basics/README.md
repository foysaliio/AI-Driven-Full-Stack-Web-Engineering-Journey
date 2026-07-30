# 17 - Classes and OOP Basics

## Overview

Classes are JavaScript's syntax for creating blueprints of objects with shared structure and behavior — the foundation of Object-Oriented Programming (OOP). This topic covers defining a class and creating instances from it.

## Topics Covered

### 1. Defining a Class

`class ClassName { constructor() {...} }` — the `constructor` method runs automatically when a new instance is created, and is used to set up the object's initial properties.

### 2. Creating an Instance

`new ClassName(...)` creates an actual object based on the class blueprint, passing values into the constructor.

### 3. Each Instance Has Its Own Data

Two instances of the same class are completely independent — changing one instance's properties does not affect another.

### 4. Adding Methods

Methods defined inside a class (outside the constructor) become functions available on every instance, and can use `this` to access that instance's own data.

### 5. Default Parameter Values in a Constructor

Constructor parameters can have default values, just like regular functions, used when a value isn't provided during instantiation.

### 6. Checking an Instance's Type

`instanceof` checks whether an object was created from a specific class; `typeof` on any class instance returns `"object"`.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates defining classes, creating instances, and using instance methods

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- A class is a blueprint; an instance (created with `new`) is an actual object built from that blueprint.
- Inside a class method, `this` refers to the specific instance the method was called on.
- `instanceof` is the standard way to check whether an object was created from a particular class.
