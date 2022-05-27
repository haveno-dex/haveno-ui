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
import { AddressCard } from "./AddressCard";
import { AppProviders } from "@atoms/AppProviders";

describe("molecules::AddressCard", () => {
  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <AddressCard address="Address here" label="Address label" />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renderes the address hash code.", () => {
    const { unmount } = render(
      <AppProviders>
        <AddressCard address="ASDASDQWEKOOQLMWEM" />
      </AppProviders>
    );
    expect(screen.queryByText("ASDASDQWEKOOQLMWEM")).toMatchSnapshot();
    unmount();
  });

  it("renderes the address label.", () => {
    const { unmount } = render(
      <AppProviders>
        <AddressCard label="Primary Address" address="ASDASDQWEKOOQLMWEM" />
      </AppProviders>
    );
    expect(screen.queryByText("Primary Address")).toMatchSnapshot();
    unmount();
  });
});
