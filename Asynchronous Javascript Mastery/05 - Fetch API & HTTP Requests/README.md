# 05 - Fetch API & HTTP Requests

This module focuses on communicating with web APIs using the Fetch API and HTTP requests.

## 01. What is an API

An API provides a way for different applications or systems to communicate.

In frontend development, APIs commonly allow a browser application to communicate with a server.

The frontend can request, create, update, and delete data through API endpoints.

## 02. HTTP Request and Response

HTTP communication consists of requests and responses.

A request can contain a method, URL, headers, and body.

A response can contain a status code, headers, and response body.

Common HTTP methods include GET, POST, PUT, PATCH, and DELETE.

## 03. Fetch Basics

The Fetch API is used to make HTTP requests in modern JavaScript.

`fetch` returns a Promise that resolves to a `Response` object.

The response body must usually be read separately to access the final data.

## 04. Response Object

The `Response` object contains information about the server response.

Important properties include:

- `status`
- `statusText`
- `ok`
- `headers`
- `url`

The `ok` property is normally true for successful HTTP status codes from 200 through 299.

## 05. JSON Data

JSON is a common data format used between clients and servers.

`JSON.stringify` converts JavaScript data into a JSON string.

`JSON.parse` converts a JSON string into JavaScript data.

`response.json()` reads and parses a JSON response body.

## 06. GET Request

GET requests retrieve data from a server.

The Fetch API uses GET by default when no method is provided.

GET requests can retrieve collections, individual resources, and filtered data using query parameters.

## 07. POST Request

POST requests are commonly used to create new resources.

Request data is usually placed inside the request body.

When sending JSON, the body is commonly created using `JSON.stringify` and the `Content-Type` header is set to `application/json`.

## 08. PUT and PATCH Requests

PUT is commonly used to replace or fully update a resource.

PATCH is commonly used to update selected fields of an existing resource.

The exact behavior can depend on the API design.

## 09. DELETE Request

DELETE requests remove resources.

A successful DELETE response may not contain a JSON response body.

The application should follow the behavior defined by the API.

## 10. Request Headers

HTTP headers contain additional metadata about a request or response.

Common request headers include:

- `Content-Type`
- `Accept`
- `Authorization`

Headers are commonly used to describe body formats and provide authentication information.

## 11. HTTP Status Codes

HTTP status codes describe the result of an HTTP request.

The major categories are:

- 1xx for informational responses
- 2xx for successful responses
- 3xx for redirects
- 4xx for client-related errors
- 5xx for server-related errors

Common codes include 200, 201, 204, 400, 401, 403, 404, and 500.

## 12. Fetch Error Handling

Fetch does not automatically reject its Promise for every HTTP error response.

Responses such as 404 and 500 normally still resolve to a Response object.

Applications should inspect `response.ok` or `response.status` and throw an error when appropriate.

Network failures can cause the Fetch Promise itself to reject.

## 13. AbortController

`AbortController` can cancel an ongoing Fetch request.

A controller provides a signal that can be passed into `fetch`.

Calling `abort()` cancels the associated request.

Cancellation is useful for searches, component cleanup, and requests that are no longer needed.

## 14. Reusable API Functions

Repeated Fetch logic can be moved into reusable helper functions.

A shared request function can handle base URLs, headers, status checking, JSON parsing, and common errors.

Specific functions can then handle operations such as getting users, creating posts, updating resources, and deleting resources.

This creates cleaner and more maintainable API code.
