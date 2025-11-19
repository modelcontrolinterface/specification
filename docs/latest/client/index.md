# Client Overview

In the Model Control Interface (MCI), a client refers to any application that
may need to execute actions by running code through the interface. MCI provides
SDKs that developers can integrate into their client applications to enable
this functionality.

In this document, however, we focus on describing the
underlying behavior and responsibilities of client provided by the SDK rather
than the SDKs themselves.

## 1. Managing connections

The service manager is always active and waiting for incoming connections;
therefore, it is the client’s responsibility to initiate and manage the
lifecycle of that connection. The client’s connection-management
responsibilities include:

- **Establishing the initial connection**: Initiating a secure, authenticated
  session with the service manager.
- **Maintaining the connection**: Sending periodic keep-alive signals
  to confirm that the client is still active and reachable.
- **Handling disconnections**: Detecting when the service manager becomes
  unavailable or the connection is lost, and automatically attempting to
  reconnect using the appropriate retry strategy.
- **Graceful shutdown**: Explicitly closing the connection when the client is
  shutting down to allow the service manager to release associated resources.

## 2. Send and Receive Requests

Aside connection management, clients are responsible for all communication of
actions and events through MCI. This includes:

- **Sending requests to the service manager:** Clients issue RPCs, that the
  service manager executes on their behalf.

- **Subscribing to server-initiated requests or events:** In addition to
  receiving responses to their own requests, clients must be able to handle
  messages initiated by the service manager.
