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

import { createHash } from "crypto";
import { afterEach, expect, test, vi } from "vitest";

const exposeInMainWorldMock = vi.fn();
vi.mock("electron", () => ({
  contextBridge: { exposeInMainWorld: exposeInMainWorldMock },
}));

afterEach(() => {
  vi.clearAllMocks();
});

test("versions", async () => {
  await import("../src/versions");
  expect(exposeInMainWorldMock).toBeCalledTimes(1);
  expect(exposeInMainWorldMock).lastCalledWith("versions", process.versions);
});

test("nodeCrypto", async () => {
  await import("../src/nodeCrypto");
  expect(exposeInMainWorldMock).toBeCalledTimes(1);
  expect(exposeInMainWorldMock.mock.calls[0][0]).toBe("nodeCrypto");
  expect(exposeInMainWorldMock.mock.calls[0][1]).toHaveProperty("sha256sum");

  const data = "rawData";
  const expectedHash = createHash("sha256").update(data).digest("hex");

  expect(exposeInMainWorldMock.mock.calls[0][1].sha256sum(data)).toBe(
    expectedHash
  );
});
