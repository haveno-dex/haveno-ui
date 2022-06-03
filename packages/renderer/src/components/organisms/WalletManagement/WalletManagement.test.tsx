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
import { SeedPhrase } from "./SeedPhrase";
import { WalletManagement } from ".";
import { AppProviders } from "@atoms/AppProviders";

describe("molecules::WalletManagement", () => {
  beforeAll(() => {
    vi.mock("@hooks/haveno/useValidatePassword", () => ({
      useValidatePassword: () => ({
        isLoading: false,
        isSuccess: true,
        data: true,
      }),
    }));

    vi.mock("@hooks/haveno/useXmrSeed", () => ({
      useXmrSeed: () => ({
        isLoading: true,
        isSuccess: true,
        data: "baptism ounce solved gimmick cafe absorb pouch gesture fawns degrees bikini inline island oncoming menu tissue cajun inwardly chlorine popular sleepless taboo aces arises popular",
      }),
    }));
  });

  it("renders loading state", () => {
    const { asFragment } = render(
      <AppProviders>
        <WalletManagement />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders after loading data", async () => {
    const { asFragment, queryByText } = render(
      <AppProviders>
        <SeedPhrase />
      </AppProviders>
    );
    if (queryByText("Loading...")) {
      await waitForElementToBeRemoved(() => queryByText("Loading..."));
    }
    expect(asFragment()).toMatchSnapshot();
  });
});
