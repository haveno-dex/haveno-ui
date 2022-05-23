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

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddNode } from ".";

describe("organisms::AddNode", () => {
  it("renders without exploding", () => {
    const submitSpy = vi.fn();
    const { asFragment, unmount } = render(<AddNode onSubmit={submitSpy} />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("can render the form without the title", () => {
    const submitSpy = vi.fn();
    const { asFragment, unmount } = render(
      <AddNode showTitle={false} onSubmit={submitSpy} />
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("blocks onSubmit on validation failure", async () => {
    const submitSpy = vi.fn();
    const { unmount } = render(
      <AddNode showTitle={false} onSubmit={submitSpy} />
    );
    fireEvent.submit(screen.getByRole("button", { name: "Save" }));
    expect(submitSpy).not.toHaveBeenCalled();
    unmount();
  });

  it("calls onSubmit on successful validation", async () => {
    const submitSpy = vi.fn();
    const user = userEvent.setup();
    const { unmount } = render(
      <AddNode showTitle={false} onSubmit={submitSpy} />
    );
    expect(submitSpy).to.not.toHaveBeenCalled();
    await user.type(
      screen.getByLabelText("Node address"),
      "http://haveno.network"
    );
    await user.type(screen.getByLabelText("Port"), "58080");
    fireEvent.submit(screen.getByRole("button", { name: "Save" }));
    expect(submitSpy).to.toHaveBeenCalledTimes(1);
    unmount();
  });
});
