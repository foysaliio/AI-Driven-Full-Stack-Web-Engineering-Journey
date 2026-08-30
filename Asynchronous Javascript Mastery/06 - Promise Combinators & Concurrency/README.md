# 06 - Promise Combinators & Concurrency

This module focuses on coordinating multiple asynchronous operations using Promise combinators and concurrency patterns.

## 01. Sequential vs Concurrent

Sequential asynchronous operations run one after another.

The next operation starts only after the previous operation finishes.

Concurrent asynchronous operations can be started together and remain in progress at the same time.

Sequential execution is appropriate when operations depend on previous results.

Concurrent execution is often more efficient when operations are independent.

## 02. Starting Promises Together

An asynchronous operation usually starts when its function is called.

`await` does not start a Promise.

It waits for an already created or returned Promise to settle.

Creating multiple Promises before awaiting them can allow independent asynchronous operations to begin together.

## 03. Promise all

`Promise.all` waits for all provided Promises to fulfill.

It returns a Promise containing an array of fulfilled values.

The result array preserves the order of the original input Promises.

If any input Promise rejects, `Promise.all` rejects.

It is useful when every asynchronous operation must succeed.

## 04. Promise allSettled

`Promise.allSettled` waits for every provided Promise to settle.

Each result contains a status of either `fulfilled` or `rejected`.

Fulfilled results contain a `value`.

Rejected results contain a `reason`.

It is useful when every operation's final outcome is important, even if some operations fail.

## 05. Promise race

`Promise.race` settles when the first input Promise settles.

The first Promise may fulfill or reject.

The state and result of that first settled Promise become the result of `Promise.race`.

It is useful for patterns such as timeouts and racing multiple asynchronous operations.

## 06. Promise any

`Promise.any` fulfills with the first successfully fulfilled Promise.

Rejected Promises are ignored while another Promise may still fulfill.

If every input Promise rejects, `Promise.any` rejects with an `AggregateError`.

It is useful when several possible sources can provide the same successful result.

## 07. Parallel API Requests

Independent HTTP requests can often be started concurrently.

`Promise.all` is commonly used to wait for several independent API requests.

This can reduce total waiting time compared with unnecessary sequential requests.

Dependent requests should still be executed in the required sequence.

## 08. Promise Failure Behavior

`Promise.all` rejects when one of its input Promises rejects.

This does not automatically cancel the remaining asynchronous operations.

Operations that have already started may continue running.

Cancellation must be implemented separately when required.

## 09. Timeout with Promise race

A timeout Promise can be raced against another asynchronous operation using `Promise.race`.

If the real operation settles first, its result is used.

If the timeout rejects first, the operation can be treated as timed out.

`Promise.race` alone does not cancel the underlying operation.

Tools such as `AbortController` can be used when actual request cancellation is needed.

## 10. Batch Processing

Large collections of asynchronous tasks do not always need to run simultaneously.

Tasks can be divided into smaller batches.

Operations inside each batch can run concurrently while the batches themselves are processed sequentially.

Batch processing is a basic technique for controlling asynchronous workload.

## 11. Choosing the Right Promise Method

Different Promise combinators solve different problems.

`Promise.all` is useful when every operation must succeed.

`Promise.allSettled` is useful when every outcome must be inspected.

`Promise.race` is useful when the first settled result matters.

`Promise.any` is useful when the first successful result matters.

The decision between sequential and concurrent execution depends on whether the operations depend on each other.
