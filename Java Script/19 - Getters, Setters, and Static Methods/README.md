# 19 - Getters, Setters, and Static Methods

## Overview

This topic covers three class features that make JavaScript OOP more powerful: getters (computed properties), setters (controlled property assignment), and static members (belonging to the class itself, not individual instances).

## Topics Covered

### 1. Getters

`get propertyName() {...}` defines a method that is accessed like a regular property (no parentheses needed), commonly used for computed values.

### 2. Setters

`set propertyName(value) {...}` defines a method that runs automatically whenever that property is assigned a new value — allowing validation before the value is actually stored.

### 3. Getter/Setter Pairs with an Internal Property

A common pattern uses an internal property (prefixed with `_`, e.g. `_balance`) alongside a getter/setter pair with the public name (`balance`), so reading and writing both go through controlled logic.

### 4. Static Methods

`static methodName() {...}` defines a method that belongs to the class itself, not to any individual instance — called directly as `ClassName.methodName()`, and cannot be called on an instance.

### 5. Static Properties

`static propertyName = value` defines a value shared across the entire class rather than duplicated per instance — useful for tracking things like a running count of created instances.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates getters, setters with validation, static methods, and a static counter

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Getters and setters let you use property-like syntax (`obj.value`) while still running custom logic behind the scenes.
- Setters are the standard place to add validation before allowing a property to change.
- Static methods/properties belong to the class itself — they're used for utility functions or shared data that doesn't depend on any single instance.
