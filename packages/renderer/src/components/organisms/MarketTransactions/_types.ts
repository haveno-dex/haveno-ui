export interface MarketTransaction {
  price: number;
  priceComparison: number;
  priceCurrency: string;
  amount: number;
  amountCurrency: string;
  cost: number;
  costCurrency: string;
  paymentMethod: string;
  accountAge: number;
  accountTrades: number;
}
