import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  constructor(private readonly factory: PaymentProviderFactory) {}

  processPayment(amount: number): void {
    const paymentProvider = this.factory.createPaymentProvider();
    const transactionId = this.generateTransactionId();

    paymentProvider.authorize(amount);
    paymentProvider.capture(transactionId);
    paymentProvider.refund(transactionId);
  }

  private generateTransactionId(): string {
    return `txn-${Date.now()}`;
  }
}
