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
import { MoneroBalance } from "./MoneroBalance";

describe("organisms::MoneroBalance", () => {
  it("renders without exploding.", () => {
    const { asFragment, unmount } = render(
      <MoneroBalance>
        <MoneroBalance.Detail label="Balance">10.20</MoneroBalance.Detail>
      </MoneroBalance>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders children content.", () => {
    const { unmount } = render(<MoneroBalance>Content here...</MoneroBalance>);

    expect(screen.queryByText("Content here...")).toBeInTheDocument();
    unmount();
  });

  it("renders monero balance detail", () => {
    const { unmount } = render(
      <MoneroBalance>
        <MoneroBalance.Detail label="Balance label">10.20</MoneroBalance.Detail>
      </MoneroBalance>
    );
    expect(screen.queryByText("Balance label")).toBeInTheDocument();
    expect(screen.queryByText("10.20")).toBeInTheDocument();
    unmount();
  });

  it("display Monero logo", () => {
    const { unmount, container } = render(
      <MoneroBalance>Content here...</MoneroBalance>
    );
    expect(container.querySelector("svg#monero-icon")).toBeInTheDocument();
    unmount();
  });
});
