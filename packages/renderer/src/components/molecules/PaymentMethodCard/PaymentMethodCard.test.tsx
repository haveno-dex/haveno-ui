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

import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import {
  CryptoCurrencyAccountPayload,
  PaymentAccount,
  PaymentAccountPayload,
} from "haveno-ts";
import { PaymentMethodCard } from ".";
import { AppProviders } from "@atoms/AppProviders";

describe("molecules::PaymentMethodCard", () => {
  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <PaymentMethodCard data={paymentAccount1} />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
});

const paymentAccount1 = new PaymentAccount();
paymentAccount1.setAccountName("BTC Account 1");
const cryptoAccPayload1 = new CryptoCurrencyAccountPayload();
cryptoAccPayload1.setAddress("01234567abcdef");
const paymentAccPayload1 = new PaymentAccountPayload();
paymentAccPayload1.setCryptoCurrencyAccountPayload(cryptoAccPayload1);
paymentAccount1.setPaymentAccountPayload(paymentAccPayload1);
