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
import { AppProviders } from "@atoms/AppProviders";
import { SetPassword } from ".";

describe("organisms::SetPassword", () => {
  it("renders without exploding", () => {
    const onBackSpy = vi.fn();
    const onNextSpy = vi.fn();
    const { asFragment, unmount } = render(
      <AppProviders>
        <SetPassword onGoBack={onBackSpy} onNext={onNextSpy} />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("calls onGoBack", async () => {
    const onBackSpy = vi.fn();
    const onNextSpy = vi.fn();
    const { unmount } = render(
      <AppProviders>
        <SetPassword onGoBack={onBackSpy} onNext={onNextSpy} />
      </AppProviders>
    );
    expect(onBackSpy).to.not.toHaveBeenCalled();
    fireEvent.click(await screen.findByLabelText("Click to go back"));
    expect(onBackSpy).to.toHaveBeenCalledTimes(1);
    expect(onNextSpy).to.not.toHaveBeenCalled();
    unmount();
  });

  it("blocks submit if validation fails", async () => {
    const onBackSpy = vi.fn();
    const onNextSpy = vi.fn();

    const { unmount } = render(
      <AppProviders>
        <SetPassword onGoBack={onBackSpy} onNext={onNextSpy} />
      </AppProviders>
    );
    expect(onNextSpy).to.not.toHaveBeenCalled();
    fireEvent.click(await screen.findByLabelText("Click to submit"));
    expect(onNextSpy).to.not.toHaveBeenCalled();
    unmount();
  });

  it("calls onSubmit if validation succeeds", async () => {
    const onBackSpy = vi.fn();
    const onNextSpy = vi.fn();
    const user = userEvent.setup();
    const { unmount } = render(
      <AppProviders>
        <SetPassword onGoBack={onBackSpy} onNext={onNextSpy} />
      </AppProviders>
    );
    await user.type(screen.getByLabelText("Enter password"), "Qwe$9999", {
      skipAutoClose: true,
    });
    await user.type(screen.getByLabelText("Repeat password"), "Qwe$9999", {
      skipAutoClose: true,
    });
    expect(onNextSpy).to.not.toHaveBeenCalled();
    fireEvent.submit(screen.getByLabelText("Click to submit"));
    expect(onNextSpy).to.toHaveBeenCalledTimes(1);
    unmount();
  });
});
