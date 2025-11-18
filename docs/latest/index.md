# Specification

## Overview

**Model Control Interface** (MCI) is an open-source network of software that
enables **fast**, **reliable**, **secure**, and **efficient** integration
between LLM applications, and external services from smart appliances,
applications and online platforms to other LLMs and agent workflows.

> [!WARNING] MCI is not MCP
> While both MCP and MCI enable LLMs to interact with external systems, they
> operate on fundamentally different principles.

## Why MCI over MCP

MCP and MCI both aim to enable LLMs to interact with external systems, but they
approach the problem in fundamentally different ways.

To understand why MCI is so different, we will examine how these two systems
behave across several dimensions.

- ### Context Dependency

MCP requires all tool descriptions to live inside the model's context,
consuming tokens and forcing the model to re-parse capabilities on every turn.
As the number of tools grows, context inflates which rising inference costs,
shrinks the working memory for the actual task, increases hallucination and
reduces the model's output quality

MCI removes tools from the model’s context entirely. Capabilities instead live
in generated, typed interfaces that the LLM imports as code. This preserves the
full context window, reduces token consumption dramatically and increases the
model's output.

- ### Remote Procedure Calls

MCP relies on model producing JSON that must match server-defined schemas.
which may breaks when servers roll out new schemas, is prone to hallucinated
fields or malformed calls, is difficult for models to generate reliably and
requires intermediary responses to be stored in the model context.

MCI replaces schema guessing with real code. The model writes executable code,
imports generated service interfaces, and runs the code in a secure sandbox.
This make output deterministic, something JSON schemas cannot provide.

- ### Trust and Control

MCP has no **native** concept of permissions, authentication, or policy
enforcement. Users must in many cases trust whatever the model calls, creating
security risks such as:

- prompt-injected tool calls
- unauthorized access to service data
- destructive operations without human approval

MCI introduces a layer that validates, filters, or blocks actions before they
reach any service server. Instead of trusting the model, MCI treats the model
as a distrusted actor and ensures external actions are always mediated by
deterministic policies unless otherwise configured.

- ### Execution

MCP’s design forces synchronous, blocking tool execution. Complex workflows
require multiple round trips, slow chains of actions, and large amounts of
state retained in the model context.

MCI supports actual asynchronous and parallel execution, model output stream
interrupts, queuing responses and streaming output signals increasing the
model's speed.

- ### Service Discovery

MCP expects users to manually discover, combine, and configure servers
scattered across GitHub or vendor docs.

MCI includes a runtime package manager (MCISM) that provides a central service
repository, automated service management and environment bootstrapping

- ### Scalability and Extensibility

MCP’s JSON-RPC transport introduces latency as payload sizes grow. There is no
support for binary transport, compression, batching, or streaming of large data.

> [!INFO]
> Accompanied with these, MCI being a system of open-source tools means that
> changes could be made where needed instead of waiting for a spec update.

## Vision & Philosophy

- ### Observability and Security

  - Users must be able to observe the state of actions and data at
    every stage of transmission
  - The user must have fine-grained control over what services, actions and
    data groups the model can control or access
  - Users must be able to intercept the model's actions over the wire

- ### Data privacy

  - Models must be unable to access data they have been excluded from accessing
  - Data should be protected with the appropriate access controls
  - Permissions must be enforced externally, not via prompts

- ### Reliability

  - Actions taken by the model should be deterministic
  - We must avoid avenues which incentives unexpected models behavior when
    trying to execute an action

## Design Principles

Model control interface is designed to:

- Model agnostic
- Infinitely scalable
- Context independent
- Fast and low latency
- Easy to setup and use
- Secure, Private and transparent
