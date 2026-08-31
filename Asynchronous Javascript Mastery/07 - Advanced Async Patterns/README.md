# 07 - Advanced Async Patterns

This module focuses on real-world asynchronous patterns for building reliable, efficient, and maintainable JavaScript applications.

## 01. Retry Pattern

Retrying allows an asynchronous operation to run again after a failure.

Retries are useful for temporary failures such as unstable networks or temporarily unavailable services.

Permanent errors such as validation failures should not normally be retried without a reason.

## 02. Retry with Delay

Retrying immediately can create unnecessary pressure on a server or external service.

Adding a delay between attempts gives the system time to recover before another request is made.

A Promise-based delay helper can be combined naturally with async/await.

## 03. Exponential Backoff

Exponential backoff increases the waiting time after each failed attempt.

For example, retries may wait 500ms, 1000ms, 2000ms, and then 4000ms.

This reduces repeated pressure on an unavailable service.

Exponential backoff is commonly used in networked and distributed systems.

## 04. Timeout Pattern

Timeouts prevent asynchronous operations from waiting indefinitely.

A Fetch request can be combined with `AbortController` to cancel the actual network operation when a timeout is reached.

This is more complete than only racing a request against a timeout Promise.

## 05. Polling

Polling repeatedly checks for updated information after a delay.

It is useful when a server-side operation takes time to complete.

Common examples include payment processing, report generation, background jobs, and media processing.

Polling should usually have an interval and a stopping condition.

## 06. Cancellation

Cancellation stops asynchronous work that is no longer needed.

`AbortController` can cancel Fetch requests.

Cancellation is especially useful for searches, navigation changes, and user actions that make previous requests irrelevant.

## 07. Race Conditions

A race condition occurs when the final state depends on the unpredictable completion order of asynchronous operations.

A slower older request can sometimes finish after a newer request and overwrite newer data.

Race conditions are common in dynamic interfaces and search experiences.

## 08. Preventing Stale Responses

Stale responses can be prevented by tracking which request is the latest.

Older responses can be ignored when a newer request has already started.

Cancellation with `AbortController` can also prevent stale network requests.

## 09. Debouncing

Debouncing delays execution until repeated calls stop for a specified amount of time.

It is commonly used for search inputs, autocomplete, validation, and resize handling.

Debouncing helps reduce unnecessary operations and network requests.

## 10. Throttling

Throttling limits how frequently a function can execute.

It allows continued activity while restricting execution to controlled intervals.

It is commonly useful for scrolling, mouse movement, resizing, and analytics events.

Debouncing waits until activity stops.

Throttling allows execution during continuous activity at a limited rate.

## 11. Caching Async Data

Caching stores previously retrieved data for later reuse.

Repeated requests can return cached data instead of performing another network request.

Caching can improve application speed and reduce server load.

Applications must also decide when cached data becomes stale and should be invalidated.

## 12. Request Deduplication

Request deduplication prevents multiple identical pending requests from creating duplicate network operations.

Multiple callers can share the same pending Promise.

Caching reuses completed data.

Request deduplication reuses an operation that is still in progress.

## 13. Concurrency Control

Concurrency control limits how many asynchronous operations can run at the same time.

This prevents large workloads from starting every task simultaneously.

A concurrency limit can reduce resource usage, protect APIs, and make rate-limited operations easier to manage.

Concurrency control is especially useful when processing large collections of independent asynchronous tasks.
