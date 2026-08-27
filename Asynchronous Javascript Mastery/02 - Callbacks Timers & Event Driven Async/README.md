# 02 - Callbacks Timers & Event Driven Async

This module focuses on callbacks and their role in synchronous and asynchronous JavaScript.

## 01. Callback Functions

A callback is a function passed to another function so that the receiving function can execute it.

Callbacks are not inherently asynchronous.

They can be used in both synchronous and asynchronous code.

## 02. Synchronous Callbacks

A synchronous callback executes during the current synchronous execution flow.

Array methods such as `map`, `filter`, and `forEach` commonly use synchronous callbacks.

The current operation waits for the callback to finish before continuing.

## 03. Asynchronous Callbacks

An asynchronous callback executes later after an asynchronous operation becomes ready.

Timer callbacks, event callbacks, and many older asynchronous APIs use this pattern.

The rest of the synchronous JavaScript can continue before the callback executes.

## 04. Timer Callbacks

Timer functions such as `setTimeout` and `setInterval` receive callback functions.

The runtime manages the timer and the callback becomes ready after the timer condition is satisfied.

`setTimeout` schedules a callback once.

`setInterval` repeatedly schedules a callback.

## 05. Clearing Timers

Timer functions return identifiers that can be used to cancel scheduled operations.

`clearTimeout` cancels a timeout.

`clearInterval` stops an interval.

Cleaning up unnecessary timers helps prevent unwanted behavior.

## 06. Event Callbacks

Event-driven programming uses callbacks that execute when events occur.

Browser events such as clicks, input changes, and form submissions can trigger callback functions.

JavaScript does not need to block while waiting for an event.

## 07. Callback with Data

Asynchronous operations can pass their results into callback parameters.

The callback receives the data after the operation completes.

This pattern was commonly used for asynchronous data handling before Promises became widely adopted.

## 08. Error First Callback Pattern

The error-first callback pattern commonly uses:

`callback(error, data)`

When an operation succeeds, the error is usually `null`.

When an operation fails, the callback receives an error object.

This pattern is commonly associated with older Node.js APIs.

## 09. Nested Callbacks

Nested callbacks occur when one asynchronous operation depends on the result of another.

A callback can start another asynchronous operation and provide another callback.

A small amount of nesting can be manageable, but deep nesting becomes difficult to maintain.

## 10. Callback Hell

Callback Hell occurs when many dependent asynchronous callbacks become deeply nested.

It can make code difficult to read, debug, maintain, and handle errors consistently.

This problem helped motivate the adoption of Promises and later async/await for asynchronous JavaScript.
