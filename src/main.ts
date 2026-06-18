import { PaymentContext } from "./app/PaymentContext";
import { PaymentProviderFactory } from "./core/PaymentProviderFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { StripeFactory } from "./providers/stripe/StripeFactory";

declare const process: { argv: string[] };

const provider = process.argv[2]?.toLowerCase() || "stripe";

let factory: PaymentProviderFactory;

switch (provider) {
  case "stripe":
    factory = new StripeFactory();
    break;
  case "paypal":
    factory = new PaypalFactory();
    break;
  case "apple":
  case "applepay":
    factory = new AppleFactory();
    break;
  default:
    console.error(`Unknown provider: ${provider}. Using Stripe as default.`);
    factory = new StripeFactory();
}

const context = new PaymentContext(factory);
context.processPayment(100);
