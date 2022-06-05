// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { MarketTransactionsTable } from "./MarketTransactionsTable";
import { MarketTransactionPaymentMethod } from "./_types";

export default {
  title: "molecules/MarketTransactionsTable",
  component: MarketTransactionsTable,
} as ComponentMeta<typeof MarketTransactionsTable>;

const Template: ComponentStory<typeof MarketTransactionsTable> = () => {
  return <MarketTransactionsTable data={data} />;
};

export const Default = Template.bind({});

Default.args = {};

const data = [
  {
    price: 123,
    priceCurrency: "EUR",
    priceComparison: 0.12,
    amount: 123123,
    amountCurrency: "EUR",
    cost: 123,
    costCurrency: "USD",
    paymentMethod: MarketTransactionPaymentMethod.CashByMail,
    accountAge: 12,
    accountTrades: 1212,
  },
  {
    price: 123,
    priceCurrency: "EUR",
    priceComparison: 0.12,
    amount: 123123,
    amountCurrency: "EUR",
    cost: 123,
    costCurrency: "USD",
    paymentMethod: MarketTransactionPaymentMethod.CashByMail,
    accountAge: 12,
    accountTrades: 1212,
  },
];
