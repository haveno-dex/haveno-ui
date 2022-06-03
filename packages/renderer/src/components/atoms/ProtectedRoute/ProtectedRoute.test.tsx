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

const navigateSpy = vi.fn();
const deleteSessionSpy = vi.fn();

import { beforeAll, describe, expect, it, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import type { SpyInstanceFn } from "vitest";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "@hooks/session/useAuth";
import { ROUTES } from "@constants/routes";

describe("atoms::ProtectedRoute", () => {
  beforeAll(() => {
    vi.mock("react-router-dom", () => ({
      useNavigate: () => navigateSpy,
    }));

    vi.mock("@utils/session", () => ({
      deleteSession: deleteSessionSpy,
    }));

    vi.mock("@hooks/session/useAuth", () => ({
      useAuth: vi.fn(() => ({
        isLoading: true,
        isSuccess: false,
        data: undefined,
      })),
    }));
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("renders children if auth session exists", () => {
    (useAuth as SpyInstanceFn).mockReturnValue({
      isLoading: false,
      isSuccess: true,
      data: true,
    });
    const { asFragment, unmount } = render(
      <ProtectedRoute>
        <div>Protected content</div>
      </ProtectedRoute>
    );
    expect(screen.queryByText("Protected content")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("skips rendering children and redirects to login if no auth session exists", () => {
    (useAuth as SpyInstanceFn).mockReturnValueOnce({
      isLoading: false,
      isSuccess: true,
      data: false,
    });

    const { asFragment, unmount } = render(
      <ProtectedRoute>
        <div>Protected content</div>
      </ProtectedRoute>
    );
    expect(screen.queryByText("Protected content")).toBeNull();
    expect(deleteSessionSpy).toHaveBeenCalledOnce();
    expect(navigateSpy).toHaveBeenCalledOnce();
    expect(navigateSpy).toHaveBeenCalledWith(ROUTES.Login);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("skips rendering children and redirects to login if auth session can't be retrieved", () => {
    (useAuth as SpyInstanceFn).mockReturnValueOnce({
      isLoading: false,
      isSuccess: false,
      data: true,
    });

    const { asFragment, unmount } = render(
      <ProtectedRoute>
        <div>Protected content</div>
      </ProtectedRoute>
    );
    expect(screen.queryByText("Protected content")).toBeNull();
    expect(deleteSessionSpy).toHaveBeenCalledOnce();
    expect(navigateSpy).toHaveBeenCalledOnce();
    expect(navigateSpy).toHaveBeenCalledWith(ROUTES.Login);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
});
