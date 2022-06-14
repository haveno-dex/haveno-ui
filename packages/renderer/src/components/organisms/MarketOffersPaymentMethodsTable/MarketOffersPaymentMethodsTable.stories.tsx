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
import type { TMarketOfferPaymentMethod } from "./_types";
import { MarketOffersPaymentMethodsTable } from ".";

export default {
  title: "organisms/MarketOffersPaymentMethodsTable",
  component: MarketOffersPaymentMethodsTable,
} as ComponentMeta<typeof MarketOffersPaymentMethodsTable>;

const Template: ComponentStory<typeof MarketOffersPaymentMethodsTable> = (
  args
) => {
  return <MarketOffersPaymentMethodsTable data={args.data} />;
};

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      methodName: "Celpay",
      methodKey: "celpay",
      rateTradeLimit: 20,
      rateTradeLimitCurrency: "XMR",
      info: "USA",
    },
    {
      methodName: "ACH",
      methodKey: "ach",
      rateTradeLimit: 20,
      rateTradeLimitCurrency: "XMR",
      info: "Global (AUS, TRY, USD)",
    },
    {
      methodName: "Cash by mail",
      methodKey: "cash-by-mail",
      rateTradeLimit: 20,
      rateTradeLimitCurrency: "XMR",
      info: "Spain",
    },
    {
      methodName: "Domestic Wire Transfer",
      methodKey: "domestic-wire-transfer",
      rateTradeLimit: 20,
      rateTradeLimitCurrency: "XMR",
      info: "Global",
    },
  ] as Array<TMarketOfferPaymentMethod>,
};
