# Architecture

In a nutshell, Model Client Interface (MCI) follows a client-server
architecture where each client can interact with any number of service servers,
and each server can serve multiple clients simultaneously.

## Core Components

### Client

The Client is any application that needs to execute actions.

- It uses an SDK to establish a connection and communicate with the servers.
- Communication is achieved by triggering code execution.
- The code is transferred and executed asynchronously within a sandbox
  environment.
- This execution is managed by the Service Manager and then dispatched to the
  appropriate Service Server(s).

### Service Managers

The Service Manager functions much like a package manager (e.g., npm or cargo)
for services and middleware at runtime.
Its key responsibilities include:

- Bootstrapping the execution sandbox(s).
- Managing service interfaces and configuration.
- Storing session information.
- Performing load balancing across servers.
- Managing interrupts.

### Service Server

A Service Server is any component that provides a specific service. Examples
include an IDE/text editor, a music server, a home server, or even another LLM
application.

- Services are typically registered on the Service Manager's package
  repository with their interface schema and other necessary data.
- They can also be registered outside the Service Manager for private or
  dedicated use.
