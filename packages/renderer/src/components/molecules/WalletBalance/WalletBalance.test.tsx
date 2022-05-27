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

import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { AppProviders } from "@atoms/AppProviders";
import { WalletBalance } from ".";

describe("molecules::WalletBalance", () => {
  beforeAll(() => {
    vi.mock("@hooks/haveno/useBalances", () => ({
      useBalances: () => ({
        isLoading: false,
        isSuccess: true,
        data: {
          lockedBalance: 12,
          reservedTradeBalance: 14,
          balance: 15,
        },
      }),
    }));

    vi.mock("@hooks/storage/useAccountInfo", () => ({
      useAccountInfo: () => ({
        isLoading: false,
        isSuccess: true,
        data: {
          primaryFiat: "USD",
        },
      }),
    }));

    vi.mock("@hooks/haveno/usePrice", () => ({
      usePrice: () => ({
        isLoading: false,
        isSuccess: true,
        data: 300,
      }),
    }));
  });

  it("renders loading state", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <WalletBalance />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders after loading data", async () => {
    const { asFragment, queryByText, unmount } = render(
      <AppProviders>
        <WalletBalance />
      </AppProviders>
    );
    if (queryByText("Loading...")) {
      await waitForElementToBeRemoved(() => queryByText("Loading..."));
    }
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
});
