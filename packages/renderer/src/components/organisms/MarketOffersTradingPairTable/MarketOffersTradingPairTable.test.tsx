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
import type { TMarketOffersTradingPair } from "./_types";
import { MarketOffersTradingPairTable } from "./MarketOffersTradingPairTable";
import { AppProviders } from "@atoms/AppProviders";

describe("molecules::MarketoffersTradingPairTable", () => {
  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <MarketOffersTradingPairTable data={data} />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders all columns", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersTradingPairTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("Pair")).toBeInTheDocument();
    expect(screen.queryByText("Last Price")).toBeInTheDocument();
    expect(screen.queryByText("24th Change")).toBeInTheDocument();
    expect(screen.queryByText("24th Vol")).toBeInTheDocument();
    unmount();
  });

  it("renders Pair cells", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersTradingPairTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("EUR/XMR")).toBeInTheDocument();
    expect(screen.queryByText("USD/XMR")).toBeInTheDocument();
    unmount();
  });

  it("renders Day Change Volume cells", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersTradingPairTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("4,233.123")).toBeInTheDocument();
    expect(screen.queryByText("1,222.123")).toBeInTheDocument();
    unmount();
  });
});

const data = [
  {
    fromPair: "EUR",
    toPair: "XMR",
    lastPrice: 101.12,
    lastPriceCurrency: "EUR",
    dayChangeRate: 12.12,
    dayChangeVolume: 4233.123,
  },
  {
    fromPair: "USD",
    toPair: "XMR",
    lastPrice: 105.12,
    lastPriceCurrency: "EUR",
    dayChangeRate: 83.12,
    dayChangeVolume: 1222.123,
  },
] as Array<TMarketOffersTradingPair>;
