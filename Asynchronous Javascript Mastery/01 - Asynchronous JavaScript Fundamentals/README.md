# 01 - Asynchronous JavaScript Fundamentals

This module introduces the fundamental concepts required to understand asynchronous JavaScript.

## 01. Synchronous JavaScript

JavaScript normally executes synchronous code one operation at a time.

Each operation must finish before the next synchronous operation can continue.

This creates a predictable top-to-bottom execution flow.

## 02. Blocking Code

Blocking code prevents JavaScript from continuing until the current operation finishes.

Large calculations or long-running synchronous operations can block the main JavaScript thread.

In browser applications, excessive blocking work can make the user interface temporarily unresponsive.

## 03. Asynchronous JavaScript

Asynchronous JavaScript allows certain operations to be handled without blocking the normal synchronous execution flow.

JavaScript can start an asynchronous operation and continue executing other code.

When the asynchronous operation is ready, its callback can later be executed.

## 04. JavaScript Runtime

JavaScript runs inside a runtime environment such as a web browser or Node.js.

The JavaScript engine executes JavaScript code, while the runtime provides additional asynchronous capabilities.

Browser environments provide features such as timers, DOM events, and network operations.

## 05. Call Stack

The Call Stack keeps track of currently executing functions.

When a function is called, it is added to the stack.

When the function finishes, it is removed from the stack.

The Call Stack follows the Last In, First Out principle.

## 06. Web APIs

Web APIs are features provided by the browser environment.

Examples include timers, DOM events, and network requests.

These systems allow certain operations to be handled outside the JavaScript Call Stack.

## 07. Callback Queue

When an asynchronous callback becomes ready, it may wait inside a task queue.

The callback does not interrupt currently executing synchronous JavaScript.

It must wait until JavaScript is ready to execute it.

## 08. Event Loop

The Event Loop coordinates the Call Stack and asynchronous queues.

It checks whether the Call Stack is empty.

When the stack is available, ready callbacks can be scheduled for execution.

The Event Loop is a central part of JavaScript's asynchronous behavior.

## 09. setTimeout

`setTimeout` schedules a callback to run after a minimum delay.

The delay does not guarantee the exact execution time because the callback must also wait until JavaScript can execute it.

A scheduled timeout can be cancelled using `clearTimeout`.

## 10. setInterval

`setInterval` repeatedly schedules a callback using a specified interval.

It continues until it is cancelled using `clearInterval`.

Intervals should be stopped when they are no longer needed.

## 11. Execution Order

Synchronous JavaScript executes before queued asynchronous callbacks.

Asynchronous operations may be handled by the runtime while JavaScript continues executing synchronous code.

When an asynchronous callback becomes ready, it waits until the Call Stack becomes available.

Understanding the relationship between the Call Stack, Web APIs, queues, and the Event Loop is the foundation of asynchronous JavaScript.
