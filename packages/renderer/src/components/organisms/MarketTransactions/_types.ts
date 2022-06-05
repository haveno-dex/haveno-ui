export interface MarketTransaction {
  price: number;
  priceComparison: number;
  priceCurrency: string;
  amount: number;
  amountCurrency: string;
  cost: number;
  costCurrency: string;
  paymentMethod: MarketTransactionPaymentMethod;
  accountAge: number;
  accountTrades: number;
}

export enum MarketTransactionPaymentMethod {
  CashByMail = "CashByMail",
}
