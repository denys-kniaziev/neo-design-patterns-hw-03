# Woolf University. Design Patterns Course. Homework – Factory Patterns

Practice Factory Method and Abstract Factory patterns in TypeScript.

## Topic

Build a small payment system that demonstrates:

* Factory Method
* Abstract Factory
* Interface-based design
* Object creation through factories
* Easy extension with new providers

## Requirements

The solution should support multiple payment providers with the same payment flow.

Required providers:

* Stripe
* PayPal
* Apple Pay

Each provider should support:

* Authorize payment
* Capture payment
* Refund payment

## Main Logic

The app should demonstrate:

* Creating payment providers through factories
* Hiding direct `new` usage behind factory classes
* Working with providers through common interfaces
* Running the same payment flow for different providers
* Selecting a provider dynamically from command-line arguments

## Run

```bash
npx ts-node src/main.ts stripe
```

Other supported values:

```bash
npx ts-node src/main.ts paypal
npx ts-node src/main.ts apple
```
