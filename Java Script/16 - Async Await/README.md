# 16 - Async Await

## Overview

`async`/`await` is modern syntax built on top of Promises that lets asynchronous code be written and read like normal, synchronous code — no `.then()` chains needed.

## Topics Covered

### 1. The `async` Keyword

Placing `async` before a function makes it always return a Promise, and allows the use of `await` inside it.

### 2. The `await` Keyword

`await` pauses execution inside an `async` function until the Promise it's waiting on resolves, then gives back the resolved value directly — no `.then()` required.

### 3. Async Functions Always Return a Promise

Even if an `async` function returns a plain value (like a string), calling it still gives back a Promise, which can be handled with `.then()` if needed.

### 4. Error Handling with try...catch

Since `await` can "fail" (when a Promise rejects), errors are caught using a normal `try...catch` block — the same pattern used for regular synchronous errors.

### 5. Multiple Awaits in Sequence

Each `await` pauses until its own Promise finishes before moving to the next line — useful when one step depends on the result of the previous one.

### 6. Promise.all() for Running Tasks Together

`await Promise.all([...])` runs multiple Promises **at the same time** and waits for all of them to finish — much faster than awaiting them one by one when they don't depend on each other.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates async/await, try/catch error handling, sequential awaits, and Promise.all

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output (some messages will appear after a short delay).

## Key Takeaways

- `async`/`await` is just a cleaner way to write Promise-based code — it doesn't replace Promises, it works on top of them.
- Use `try...catch` around `await` to handle rejected Promises, instead of `.catch()`.
- Use `Promise.all()` when multiple independent async tasks can run at the same time, instead of awaiting them one after another.
