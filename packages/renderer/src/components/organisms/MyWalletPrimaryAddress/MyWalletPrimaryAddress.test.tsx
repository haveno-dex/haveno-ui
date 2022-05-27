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
import { AppProviders } from "@atoms/AppProviders";
import { MyWalletPrimaryAddress } from "./MyWalletPrimaryAddress";

describe("organisms::MyWalletPrimaryAddress", () => {
  beforeAll(() => {
    vi.mock("@hooks/haveno/useXmrPrimaryAddress", () => ({
      useXmrPrimaryAddress: () => ({
        isLoading: false,
        isSuccess: true,
        data: "HAVENOADDRESS",
      }),
    }));
  });

  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <MyWalletPrimaryAddress />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders xmr primary address from the daemon.", () => {
    const { unmount } = render(
      <AppProviders>
        <MyWalletPrimaryAddress />
      </AppProviders>
    );
    expect(screen.queryByText("HAVENOADDRESS")).toMatchSnapshot();
    unmount();
  });
});
