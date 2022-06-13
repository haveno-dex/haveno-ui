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

const navSpy = vi.fn();
const loginSpy = vi.fn();

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from ".";
import { AppProviders } from "@atoms/AppProviders";
import { ROUTES } from "@constants/routes";

describe("pages::Login", () => {
  beforeEach(() => {
    vi.mock("react-router-dom", async () => ({
      ...(await vi.importActual<any>("react-router-dom")), // eslint-disable-line @typescript-eslint/no-explicit-any
      useNavigate: () => navSpy,
    }));

    vi.mock("@hooks/session/useLogin", () => ({
      useLogin: () => ({
        mutate: loginSpy,
        isLoading: false,
      }),
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <Login />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("blocks login if validation fails", async () => {
    const user = userEvent.setup();
    const { unmount } = render(
      <AppProviders>
        <Login />
      </AppProviders>
    );
    const btnSubmit = screen.getByRole("button", { name: "Login" });
    fireEvent.submit(btnSubmit);
    expect(loginSpy).to.not.toHaveBeenCalled();
    // try a short password
    await user.type(screen.getByLabelText("Password"), "foo");
    fireEvent.submit(btnSubmit);
    expect(loginSpy).to.not.toHaveBeenCalled();
    unmount();
  });

  it("calls login", async () => {
    const PASSWORD = "Haveno!2022";
    const user = userEvent.setup();
    const { unmount } = render(
      <AppProviders>
        <Login />
      </AppProviders>
    );
    expect(loginSpy).to.not.toHaveBeenCalled();
    await user.type(screen.getByLabelText("Password"), PASSWORD);
    fireEvent.submit(screen.getByRole("button", { name: "Login" }));
    expect(loginSpy).to.toHaveBeenCalledTimes(1);
    unmount();
  });

  it("navigates to Market page after successful login", async () => {
    const PASSWORD = "Haveno!2022";
    loginSpy.mockImplementation(({ password }, { onSuccess, onError }) => {
      if (password === PASSWORD) {
        onSuccess();
      } else {
        onError({ message: "Invalid password" });
      }
    });
    const user = userEvent.setup();
    const { unmount } = render(
      <AppProviders>
        <Login />
      </AppProviders>
    );
    expect(navSpy).to.toHaveBeenCalledTimes(0);
    await user.type(screen.getByLabelText("Password"), PASSWORD);
    fireEvent.submit(screen.getByRole("button", { name: "Login" }));
    expect(navSpy).to.toHaveBeenCalledTimes(1);
    expect(navSpy).toHaveBeenCalledWith(ROUTES.Markets, {
      replace: true,
    });
    unmount();
  });
});
