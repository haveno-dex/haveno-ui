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
import { MarketoffersSelectPaymentMethods } from ".";

export default {
  title: "molecules/MarketoffersSelectPaymentMethods",
  component: MarketoffersSelectPaymentMethods,
} as ComponentMeta<typeof MarketoffersSelectPaymentMethods>;

const Template: ComponentStory<
  typeof MarketoffersSelectPaymentMethods
> = () => {
  return <MarketoffersSelectPaymentMethods data={data} />;
};

export const Default = Template.bind({});

Default.args = {};

const data = [
  {
    method: "Celpay",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
];
