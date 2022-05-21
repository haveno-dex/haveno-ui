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
import { ReadyToUse } from ".";

describe("molecules::ReadyToUse", () => {
  it("renders without exploding", () => {
    const spy = vi.fn();
    const { asFragment, unmount } = render(<ReadyToUse onSubmit={spy} />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("calls onSubmit", () => {
    const spy = vi.fn();
    const { unmount } = render(<ReadyToUse onSubmit={spy} />);
    expect(spy).to.not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button"));
    expect(spy).to.toHaveBeenCalledTimes(1);
    unmount();
  });
});
