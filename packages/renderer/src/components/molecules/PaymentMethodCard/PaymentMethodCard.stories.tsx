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

import { Stack } from "@mantine/core";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  CryptoCurrencyAccountPayload,
  PaymentAccount,
  PaymentAccountPayload,
} from "haveno-ts";
import { AddPaymentMethodButton, PaymentMethodCard } from ".";

export default {
  title: "molecules/PaymentMethodCard",
  component: PaymentMethodCard,
} as ComponentMeta<typeof PaymentMethodCard>;

const Template: ComponentStory<typeof PaymentMethodCard> = () => {
  return (
    <Stack>
      <PaymentMethodCard data={paymentAccount1} />
    </Stack>
  );
};

const Template2: ComponentStory<typeof PaymentMethodCard> = () => {
  return (
    <Stack>
      <AddPaymentMethodButton onClick={() => console.log("onClick called")} />
    </Stack>
  );
};

export const Default = Template.bind({});
export const AddButton = Template2.bind({});

const paymentAccount1 = new PaymentAccount();
paymentAccount1.setAccountName("BTC Account 1");
const cryptoAccPayload1 = new CryptoCurrencyAccountPayload();
cryptoAccPayload1.setAddress("01234567abcdef");
const paymentAccPayload1 = new PaymentAccountPayload();
paymentAccPayload1.setCryptoCurrencyAccountPayload(cryptoAccPayload1);
paymentAccount1.setPaymentAccountPayload(paymentAccPayload1);
