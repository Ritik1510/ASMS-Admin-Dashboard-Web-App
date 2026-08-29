# Network Layer

## What is this layer?

The network layer contains the application's infrastructure for communicating with external and backend services.

## Why does it exist?

To centralize network-related concerns and keep application features independent from transport and authentication implementations.

## What belongs here?

* HTTP infrastructure
* Access-token providers
* Authentication integration
* Network request configuration
* Future network-level security mechanisms

## What does not belong here?

* Business logic
* UI or React components
* Domain-specific application logic
* Database operations
* Feature-specific state management

## How should it be used?

Application features should depend on the network abstractions rather than directly implementing transport or authentication mechanisms.

## What is the responsibility boundary?

**Network layer = How the application communicates externally.**

**Feature/service layer = What the application communicates about.**

**UI layer = How the application presents and interacts with it.**

## Architectural rule

Keep network infrastructure centralized, reusable, provider-aware where necessary, and independent from business logic.
