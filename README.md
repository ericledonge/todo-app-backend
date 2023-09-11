# Progress

First, the workout controller (you can just copy the whole content):

# Architecture

![architecture.png](assets%2Farchitecture.png)

The Router handles the routing.

The Controllers handle the requests and responses.

The Services handle the business logic.

The Data Access Layer handles the database operations.

# Miscellaneous

How to generate a random value for tokens, with node:
> require('crypto').randomBytes(64).toString('hex')
