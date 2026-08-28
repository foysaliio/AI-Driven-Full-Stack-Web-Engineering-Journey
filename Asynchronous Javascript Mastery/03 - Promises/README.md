# 03 - Promises

This module introduces Promises and explains how they improve asynchronous JavaScript compared with deeply nested callbacks.

## 01. Promise Basics

A Promise represents the future result of an operation.

The operation may eventually succeed with a value or fail with an error.

Promises provide a structured way to handle asynchronous results.

## 02. Promise States

A Promise has three main states:

- Pending
- Fulfilled
- Rejected

A Promise begins in the pending state.

When it succeeds, it becomes fulfilled.

When it fails, it becomes rejected.

A fulfilled or rejected Promise is considered settled.

A Promise can settle only once.

## 03. Creating a Promise

Promises can be created using the `Promise` constructor.

The constructor receives an executor function with `resolve` and `reject` parameters.

The executor function runs immediately when the Promise is created.

Asynchronous operations can be started inside the executor.

## 04. Resolve and Reject

`resolve` fulfills a Promise with a successful value.

`reject` rejects a Promise with an error or failure reason.

Using `Error` objects when rejecting usually provides better error information.

## 05. then

The `then` method handles fulfilled Promise values.

The value passed to `resolve` becomes available to the fulfillment callback provided to `then`.

Each call to `then` returns a new Promise.

## 06. catch

The `catch` method handles Promise rejections.

It can handle errors created through `reject` and errors thrown inside earlier Promise handlers.

Using a final `catch` provides centralized error handling for a Promise chain.

## 07. finally

The `finally` method executes after a Promise settles regardless of whether it was fulfilled or rejected.

It is commonly used for cleanup operations and resetting loading states.

## 08. Returning Values from then

Returning a regular value from a `then` callback makes that value available to the next step in the Promise chain.

If no value is returned, the next step receives `undefined`.

This allows values to be transformed across multiple Promise steps.

## 09. Promise Chaining

Promise chaining connects multiple operations using consecutive `then` calls.

Each step can use the result of the previous step.

This creates a flatter and more readable structure than deeply nested callbacks.

## 10. Error Propagation

Errors propagate through a Promise chain until they reach an appropriate rejection handler.

When a Promise step rejects, later fulfillment handlers are skipped until a `catch` or rejection handler processes the error.

This makes error handling easier to centralize.

## 11. Returning Promises

A `then` callback can return another Promise.

The next step in the chain waits for that returned Promise to settle.

Returning asynchronous Promises from Promise handlers is essential for maintaining the correct sequence of dependent asynchronous operations.

## 12. Callback to Promise

Callback-based asynchronous functions can be wrapped inside Promises.

A callback error can be passed to `reject`.

Successful callback data can be passed to `resolve`.

Converting callback APIs into Promise-based APIs is commonly known as promisification.

Promises provide a cleaner foundation for asynchronous flows and prepare the way for async/await.