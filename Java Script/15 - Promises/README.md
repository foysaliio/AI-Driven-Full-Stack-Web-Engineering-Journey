# 15 - Promises

## Overview

A Promise is an object representing the eventual result of an asynchronous operation. This topic covers creating Promises, handling success/failure, and chaining multiple asynchronous steps together — the modern replacement for plain callback functions.

## Topics Covered

### 1. Creating a Promise

`new Promise((resolve, reject) => {...})` — the executor function runs immediately and calls `resolve(value)` on success or `reject(reason)` on failure.

### 2. Using .then() and .catch()

`.then()` runs when the Promise resolves successfully; `.catch()` runs when the Promise rejects (fails).

### 3. A Failing Promise

When `reject()` is called, the `.then()` block is skipped entirely and control jumps straight to `.catch()`.

### 4. .finally()

Runs after the Promise settles, regardless of whether it succeeded or failed — useful for cleanup code like hiding a loading indicator.

### 5. Chaining Multiple .then() Calls

Each `.then()` can `return` a value, which becomes the input to the next `.then()` in the chain — this avoids deeply nested callbacks ("callback hell").

### 6. A Practical Function That Returns a Promise

Wrapping an asynchronous operation (like a simulated data fetch) inside a function that returns a Promise, so the caller can use `.then()`/`.catch()` on it.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates creating, resolving, rejecting, and chaining Promises

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output (some messages will appear after a short delay).

## Key Takeaways

- A Promise has three states: pending, fulfilled (resolved), or rejected.
- `.then()` handles success, `.catch()` handles failure, `.finally()` always runs.
- Returning a value from inside `.then()` passes it to the next `.then()` in the chain — this is what makes Promise chaining work.
