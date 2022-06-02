import { NavbarLayout } from "@templates/NavbarLayout";
import { MarketTransactions } from "@organisms/MarketTransactions";

export function MarketsTransactions() {
  return (
    <NavbarLayout>
      <MarketTransactions data={data} />
    </NavbarLayout>
  );
}

const data = [
  {
    price: 123,
    priceComparison: 0.12,
    amount: 123123,
    amountCurrency: "EUR",
    cost: 123,
    costCurrency: "USD",
    paymentMethod: "ASD",
    accountAge: 12,
    accountTrades: 1212,
  },
  {
    price: 123,
    priceComparison: 0.12,
    amount: 123123,
    amountCurrency: "EUR",
    cost: 123,
    costCurrency: "USD",
    paymentMethod: "ASD",
    accountAge: 12,
    accountTrades: 1212,
  },
];
