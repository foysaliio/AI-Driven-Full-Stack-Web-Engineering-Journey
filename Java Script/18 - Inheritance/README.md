# 18 - Inheritance

## Overview

Inheritance lets one class reuse and build on another class's properties and methods, avoiding duplicate code. This topic covers `extends`, `super()`, and method overriding.

## Topics Covered

### 1. Parent (Base) Class

A regular class that defines shared properties and methods other classes can reuse.

### 2. Extending a Class

`class Dog extends Animal` makes `Dog` inherit everything from `Animal` — any instance of `Dog` automatically has access to `Animal`'s methods.

### 3. Overriding a Parent Method

A child class can define a method with the same name as a parent method — the child's version replaces the parent's version for that class.

### 4. super() in the Constructor

When a child class has its own `constructor`, it must call `super(...)` first to run the parent class's constructor and properly set up inherited properties.

### 5. super.methodName() to Call the Parent's Version

Inside an overridden method, `super.methodName()` can still call the original parent method — useful when you want to extend behavior rather than fully replace it.

### 6. Checking Inheritance with instanceof

An instance of a child class is `instanceof` both the child class AND the parent class, since it inherits from it.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates extends, method overriding, super(), and super.method()

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- `extends` lets a class inherit properties and methods from another class, reducing duplicate code.
- Always call `super(...)` in a child class's constructor before using `this`, or JavaScript will throw an error.
- Overriding a method fully replaces it unless `super.methodName()` is used to still call the original.
