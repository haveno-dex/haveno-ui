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

import { beforeEach, expect, test, vi } from "vitest";
import { BrowserWindow } from "electron";
import type { MaybeMocked } from "vitest";
import { restoreOrCreateWindow } from "../src/mainWindow";

/**
 * Mock real electron BrowserWindow API
 */
vi.mock("electron", () => {
  const bw = vi.fn() as MaybeMocked<typeof BrowserWindow>;
  // @ts-expect-error It's work in runtime, but I Haven't idea how to fix this type error
  bw.getAllWindows = vi.fn(() => bw.mock.instances);
  bw.prototype.loadURL = vi.fn();
  bw.prototype.on = vi.fn();
  bw.prototype.destroy = vi.fn();
  bw.prototype.isDestroyed = vi.fn();
  bw.prototype.isMinimized = vi.fn();
  bw.prototype.focus = vi.fn();
  bw.prototype.restore = vi.fn();

  return { BrowserWindow: bw };
});

beforeEach(() => {
  vi.clearAllMocks();
});

test("Should create new window", async () => {
  const { mock } = vi.mocked(BrowserWindow);
  expect(mock.instances).toHaveLength(0);

  await restoreOrCreateWindow();
  expect(mock.instances).toHaveLength(1);
  expect(mock.instances[0].loadURL).toHaveBeenCalledOnce();
  expect(mock.instances[0].loadURL).toHaveBeenCalledWith(
    expect.stringMatching(/index\.html$/)
  );
});

test("Should restore existing window", async () => {
  const { mock } = vi.mocked(BrowserWindow);

  // Create Window and minimize it
  await restoreOrCreateWindow();
  expect(mock.instances).toHaveLength(1);
  const appWindow = vi.mocked(mock.instances[0]);
  appWindow.isMinimized.mockReturnValueOnce(true);

  await restoreOrCreateWindow();
  expect(mock.instances).toHaveLength(1);
  expect(appWindow.restore).toHaveBeenCalledOnce();
});

test("Should create new window if previous was destroyed", async () => {
  const { mock } = vi.mocked(BrowserWindow);

  // Create Window and destroy it
  await restoreOrCreateWindow();
  expect(mock.instances).toHaveLength(1);
  const appWindow = vi.mocked(mock.instances[0]);
  appWindow.isDestroyed.mockReturnValueOnce(true);

  await restoreOrCreateWindow();
  expect(mock.instances).toHaveLength(2);
});
