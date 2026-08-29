# Auth Layer

## What is this layer?

The auth layer manages authentication-related infrastructure required by the network layer.

## Why does it exist?

To centralize access-token acquisition and keep authentication-provider logic separate from HTTP and application features.

## What belongs here?

* Access-token provider abstraction
* Client-side token providers
* Server-side token providers
* Authentication-provider integrations
* Future authentication/token extensions

## What does not belong here?

* HTTP request/response handling
* Business logic
* UI authentication state
* Authorization/RBAC decisions
* Feature-specific logic

## How should it be used?

Network infrastructure should request credentials through the token-provider abstraction rather than directly depending on a specific authentication provider.

## What is the responsibility boundary?

**Auth layer = How authentication credentials are obtained.**

**HTTP layer = How those credentials are used in network requests.**

**Application layer = What the authenticated request is used for.**

## Architectural rule

Keep token acquisition provider-specific and runtime-aware, while exposing a stable abstraction to the rest of the network layer.
