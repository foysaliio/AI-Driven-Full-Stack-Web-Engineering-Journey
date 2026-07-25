# 12 - Sets and Maps

## Overview

Sets and Maps are two modern JavaScript data structures introduced in ES6. This topic covers what makes them different from arrays and objects, and when to use each.

## Topics Covered

### 1. Creating a Set

A `Set` automatically stores only **unique** values — duplicates are removed automatically when added.

### 2. Adding and Removing from a Set

`.add(value)` inserts a value; `.delete(value)` removes it.

### 3. Set Size and Existence Check

`.size` gives the number of items; `.has(value)` checks if a value exists.

### 4. Looping Through a Set

`.forEach()` works on a Set just like it does on an array.

### 5. Practical Use: Removing Duplicates from an Array

`[...new Set(array)]` is the standard one-line pattern to remove duplicate values from an array.

### 6. Creating a Map

A `Map` stores key-value pairs, similar to an object, but keys can be **any type** (not just strings).

### 7. Getting, Checking, and Removing from a Map

`.get(key)` retrieves a value, `.has(key)` checks existence, `.delete(key)` removes an entry, `.size` gives the total count.

### 8. Looping Through a Map

`for...of` with array destructuring (`[name, role]`) loops through a Map's key-value pairs directly.

### 9. Map vs Object

Unlike plain objects (where keys are always converted to strings), a `Map` can use objects, numbers, or any value as a key — useful when keys aren't simple strings.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates creating, modifying, and looping through Sets and Maps

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Use a `Set` whenever you need a collection of unique values, especially for removing duplicates from an array.
- Use a `Map` instead of a plain object when keys need to be non-string types, or when you need guaranteed insertion order and a reliable `.size`.
