# 13 - JSON in JavaScript

## Overview

JSON (JavaScript Object Notation) is the standard text format for exchanging data between a browser and a server, and for storing structured data. This topic covers converting between JavaScript objects and JSON strings.

## Topics Covered

### 1. JavaScript Object vs JSON

A regular JavaScript object exists only in memory; JSON is a **text-based** format used to send or store that same data.

### 2. Converting an Object to JSON: JSON.stringify()

Turns a JavaScript object into a JSON string — required when sending data to a server or storing it as text.

### 3. Pretty-Printing JSON

`JSON.stringify(object, null, 2)` adds indentation (2 spaces here) to make the output human-readable, often used for debugging or logging.

### 4. Converting JSON Back to an Object: JSON.parse()

Turns a JSON string back into a usable JavaScript object.

### 5. Practical Use: Storing Data in localStorage

`localStorage` can only store strings, so objects must be converted with `JSON.stringify()` before saving and converted back with `JSON.parse()` after retrieving.

### 6. Handling Invalid JSON

`JSON.parse()` throws a `SyntaxError` if given text that isn't valid JSON — always wrap it in `try...catch` when parsing data from an external or unpredictable source.

### 7. JSON's Limitations

JSON only supports strings, numbers, booleans, null, arrays, and plain objects. Functions and `undefined` values are silently skipped during `JSON.stringify()`.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates converting to/from JSON, localStorage usage, and error handling

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- `JSON.stringify()` converts object → string; `JSON.parse()` converts string → object — remembering the direction of each is essential.
- Always use `try...catch` around `JSON.parse()` when the source of the data isn't guaranteed to be valid.
- `localStorage` and APIs both require JSON strings, not raw JavaScript objects — this topic is the foundation for working with real data later.
