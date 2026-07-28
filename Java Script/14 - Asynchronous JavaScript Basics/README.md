# 14 - Asynchronous JavaScript Basics

## Overview

JavaScript normally runs code line by line (synchronously). This topic introduces asynchronous behavior — code that runs later without blocking the rest of the program — using `setTimeout`, `setInterval`, and callback functions.

## Topics Covered

### 1. Synchronous Execution

By default, JavaScript executes code top to bottom, one line at a time, waiting for each line to finish before moving to the next.

### 2. setTimeout()

Schedules a function to run once after a specified delay (in milliseconds). Importantly, JavaScript does **not** pause and wait — it continues running the rest of the code immediately, and the scheduled function runs later.

### 3. Execution Order with setTimeout

A key proof of asynchronous behavior: code after a `setTimeout` call runs before the delayed function, even if the delay is very short.

### 4. setInterval()

Repeatedly runs a function every specified number of milliseconds, until it is stopped.

### 5. clearInterval()

Stops a running `setInterval()` from continuing to repeat.

### 6. clearTimeout()

Cancels a scheduled `setTimeout()` before it has a chance to run.

### 7. Callback Functions in Async Code

A function passed into another function to be called later, once some operation (like a delayed "fetch") completes. This is the original pattern JavaScript used for asynchronous operations before Promises existed.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates setTimeout, setInterval, clearTimeout/clearInterval, and a callback-based async example

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output — pay attention to the **order** in which messages appear, not just their content.

## Key Takeaways

- JavaScript does not "wait" for `setTimeout`/`setInterval` — it schedules them and keeps running the rest of the code immediately.
- Callback functions are how earlier JavaScript handled "do this after that finishes" — this is the foundation for understanding Promises and async/await in the next topics.
- Always store the ID returned by `setTimeout`/`setInterval` if you might need to cancel it later.
