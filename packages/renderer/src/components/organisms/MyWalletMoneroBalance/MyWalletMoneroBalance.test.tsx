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

import { describe, expect, it, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyWalletMoneroBalance } from "./MyWalletMeneroBalance";
import { AppProviders } from "@atoms/AppProviders";

describe("organisms::MyWalletMoneroBalance", () => {
  beforeAll(() => {
    vi.mock("@hooks/haveno/useBalances", () => ({
      useBalances: () => ({
        isLoading: false,
        isSuccess: true,
        data: {
          balance: MoneroBalance.balance,
          lockedBalance: MoneroBalance.lockedBalance,
          reservedOfferBalance: MoneroBalance.reserverdBalance,
          reservedTradeBalance: MoneroBalance.reserverdBalance,
          unlockedBalance: MoneroBalance.unlockedBalance,
        },
      }),
    }));
  });

  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <MyWalletMoneroBalance />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("contains avaliable balance, reservered funds and locked funds details", () => {
    const { unmount } = render(
      <AppProviders>
        <MyWalletMoneroBalance />
      </AppProviders>
    );
    expect(screen.queryByTestId("avaliable-balance")).toBeInTheDocument();
    expect(screen.queryByTestId("locked-funds")).toBeInTheDocument();
    expect(screen.queryByTestId("reserverd-funds")).toBeInTheDocument();
    unmount();
  });

  it("contains avaliable balance, reservered funds and locked funds details", () => {
    const { unmount } = render(
      <AppProviders>
        <MyWalletMoneroBalance />
      </AppProviders>
    );
    expect(screen.queryByTestId("avaliable-balance")).toHaveTextContent(
      "835,120.34017"
    );
    expect(screen.queryByTestId("reserverd-funds")).toHaveTextContent(
      "74,610.1236"
    );
    expect(screen.queryByTestId("locked-funds")).toHaveTextContent(
      "90,371.161239"
    );
    unmount();
  });
});

const MoneroBalance = {
  balance: 835120.34017,
  reserverdBalance: 74610.1236,
  lockedBalance: 90371.161239,
  unlockedBalance: 0,
};
