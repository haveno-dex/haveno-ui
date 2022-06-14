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
import { render, screen } from "@testing-library/react";
import type { TMarketOfferPaymentMethod } from "./_types";
import { MarketOffersPaymentMethodsTable } from ".";
import { AppProviders } from "@atoms/AppProviders";

describe("molecules::MarketOffersPaymentMethodsTable", () => {
  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <MarketOffersPaymentMethodsTable data={data} />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders all columns", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersPaymentMethodsTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("Method")).toBeInTheDocument();
    expect(screen.queryByText("Rate Trade Limit")).toBeInTheDocument();
    expect(screen.queryByText("Info")).toBeInTheDocument();
    unmount();
  });

  it("renders cells of method name ", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersPaymentMethodsTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("Celpay")).toBeInTheDocument();
    expect(screen.queryByText("ACH")).toBeInTheDocument();
    unmount();
  });

  it("renders cells of rate trade limit ", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersPaymentMethodsTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("20 XMR")).toBeInTheDocument();
    expect(screen.queryByText("40 XMR")).toBeInTheDocument();
    unmount();
  });

  it("renders cells of rate trade limit ", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersPaymentMethodsTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("USA")).toBeInTheDocument();
    expect(screen.queryByText("Global (AUS, TRY, USD)")).toBeInTheDocument();
    unmount();
  });
});

const data = [
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
    rateTradeLimit: 40,
    rateTradeLimitCurrency: "XMR",
    info: "Global (AUS, TRY, USD)",
  },
] as Array<TMarketOfferPaymentMethod>;
