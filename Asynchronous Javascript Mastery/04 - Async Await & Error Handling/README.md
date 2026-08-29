# 04 - Async Await & Error Handling

This module focuses on async functions, await, and structured error handling for Promise-based asynchronous JavaScript.

## 01. Async Functions

The `async` keyword creates an asynchronous function.

An async function always returns a Promise.

Returning a normal value from an async function creates a fulfilled Promise containing that value.

Throwing an error from an async function creates a rejected Promise.

## 02. Await

The `await` keyword waits for a Promise to settle inside an async function.

When the Promise is fulfilled, `await` produces its resolved value.

Await pauses the current async function but does not block the entire JavaScript runtime.

## 03. Promise Return from Async

Every async function returns a Promise.

A normal return value becomes a fulfilled Promise.

A thrown error becomes a rejected Promise.

Async functions can be consumed using either `then` or `await`.

## 04. Sequential Async Code

Multiple asynchronous operations can be executed sequentially using multiple `await` expressions.

Sequential execution is useful when one operation depends on the result of another operation.

Dependent asynchronous workflows become easier to read using async/await.

## 05. Try Catch

`try...catch` provides structured error handling for async/await.

If an awaited Promise rejects, execution moves to the matching `catch` block.

This provides an alternative to Promise `.catch()` chains.

## 06. Finally

The `finally` block runs whether the asynchronous operation succeeds or fails.

It is commonly used for cleanup tasks and resetting loading states.

## 07. Throwing Errors

The `throw` statement creates an error and stops normal execution of the current flow.

Throwing inside an async function causes its returned Promise to reject.

Errors can then be handled using `catch`.

## 08. Custom Errors

Custom Error classes allow applications to represent different categories of failures.

They can be created by extending the built-in `Error` class.

Custom errors make error handling more specific and maintainable.

## 09. Multiple Await Operations

Multiple `await` expressions execute sequentially when written one after another.

This is appropriate when operations depend on previous results.

Independent operations may be better executed concurrently.

## 10. Nested Async Functions

Async functions can call and await other async functions.

Breaking large asynchronous workflows into smaller functions improves readability, reuse, and maintainability.

## 11. Async Function Composition

Async function composition combines smaller asynchronous functions into larger workflows.

Each function can focus on one responsibility while higher-level functions coordinate the complete operation.

## 12. Common Async Await Mistakes

Common async/await mistakes include forgetting `await`, confusing Promises with resolved values, missing error handling, unnecessary sequential execution, and mixing Promise chains with async/await without a reason.

Async code should remain clear, consistent, and intentionally structured.
