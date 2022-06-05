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
import {
  MarketOffersTradingPairTable,
  TMarketOffersTradingPair,
} from "./MarketOffersTradingPairTable";

export default {
  title: "molecules/MarketOffersTradingPairTable",
  component: MarketOffersTradingPairTable,
} as ComponentMeta<typeof MarketOffersTradingPairTable>;

const Template: ComponentStory<typeof MarketOffersTradingPairTable> = () => {
  return <MarketOffersTradingPairTable data={data} />;
};

export const Default = Template.bind({});

Default.args = {};

const data = [
  {
    fromPair: "EUR",
    toPair: "XMR",
    lastPrice: 101.122,
    lastPriceCurrency: "EUR",
    dayChangeRate: 12.12,
    dayChangeVolume: 1222.123,
  },
] as TMarketOffersTradingPair;
