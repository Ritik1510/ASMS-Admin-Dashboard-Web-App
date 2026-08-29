# HTTP Layer

## What is this layer?

The HTTP layer provides the application's centralized infrastructure for making HTTP requests to backend APIs.

## Why does it exist?

To keep request construction, transport, headers, query parameters, response parsing, and HTTP errors consistent across the application.

## What belongs here?

* HTTP request execution
* Request configuration
* Header construction
* Query-string construction
* Response parsing
* HTTP error handling

## What does not belong here?

* Business logic
* Authentication/token acquisition
* React hooks or UI logic
* API-specific business services
* Authorization/RBAC decisions

## How should it be used?

Application code should use the HTTP request abstraction instead of implementing `fetch()` logic repeatedly.

## What is the responsibility boundary?

**HTTP layer = How a request is transported.**

**Auth layer = How authentication credentials are obtained.**

**Service/API layer = What the application is requesting.**

## Architectural rule

Keep this layer provider-agnostic and business-logic-free.
