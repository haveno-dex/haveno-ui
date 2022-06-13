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
import { MarketOffersTable } from "./MarketOffersTable";
import { AppProviders } from "@atoms/AppProviders";

describe("molecules::MarketOffersTable", () => {
  it("renders without exploding.", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <MarketOffersTable data={data} />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders all columns.", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("Price")).toBeInTheDocument();
    expect(screen.queryByText("Amount")).toBeInTheDocument();
    expect(screen.queryByText("Costs")).toBeInTheDocument();
    expect(screen.queryByText("Payment Method")).toBeInTheDocument();
    unmount();
  });

  it("renders formatted price value with currency sign.", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("€5,000.96")).toBeInTheDocument();
    expect(screen.queryByText("€9,637.41")).toBeInTheDocument();
    unmount();
  });

  it("renders formatted amount value with currency code.", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("XMR 7,564.94")).toBeInTheDocument();
    expect(screen.queryByText("XMR 6,483.23")).toBeInTheDocument();
    unmount();
  });

  it("renders offer formatted payment method.", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("Bitcoin")).toBeInTheDocument();
    expect(screen.queryByText("Altcoins")).toBeInTheDocument();
    unmount();
  });

  it("renders formatted price percentage.", () => {
    const { unmount } = render(
      <AppProviders>
        <MarketOffersTable data={data} />
      </AppProviders>
    );
    expect(screen.queryByText("12%")).toBeInTheDocument();
    expect(screen.queryByText("15%")).toBeInTheDocument();
    unmount();
  });
});

const data = [
  {
    price: 5000.956,
    priceComparison: 0.12,
    priceCurrency: "EUR",
    amount: 7564.94,
    amountCurrency: "XMR",
    cost: 532.34,
    costCurrency: "USD",
    paymentMethod: "Bitcoin",
    accountAge: 12,
    accountTrades: 1212,
  },
  {
    price: 9637.41,
    priceComparison: 0.15,
    priceCurrency: "EUR",
    amount: 6483.23,
    amountCurrency: "XMR",
    cost: 983.32,
    costCurrency: "USD",
    paymentMethod: "Altcoins",
    accountAge: 12,
    accountTrades: 3412,
  },
];
