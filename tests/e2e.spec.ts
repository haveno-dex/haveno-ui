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
import { afterAll, beforeAll, expect, test } from "vitest";
import { _electron as electron } from "playwright";
import "../packages/preload/contracts.d.ts";
import type { ElectronApplication } from "playwright";

let electronApp: ElectronApplication;

beforeAll(async () => {
  electronApp = await electron.launch({ args: ["."] });
});

afterAll(async () => {
  await electronApp.close();
});

test("Main window state", async () => {
  const windowState: {
    isVisible: boolean;
    isDevToolsOpened: boolean;
    isCrashed: boolean;
  } = await electronApp.evaluate(({ BrowserWindow }) => {
    const mainWindow = BrowserWindow.getAllWindows()[0];

    const getState = () => ({
      isVisible: mainWindow.isVisible(),
      isDevToolsOpened: mainWindow.webContents.isDevToolsOpened(),
      isCrashed: mainWindow.webContents.isCrashed(),
    });

    return new Promise((resolve) => {
      if (mainWindow.isVisible()) {
        resolve(getState());
      } else
        mainWindow.once("ready-to-show", () =>
          setTimeout(() => resolve(getState()), 0)
        );
    });
  });

  expect(windowState.isCrashed, "App was crashed").toBeFalsy();
  expect(windowState.isVisible, "Main window was not visible").toBeTruthy();
  expect(windowState.isDevToolsOpened, "DevTools was opened").toBeFalsy();
});

// TODO: Haveno daemon integration break e2e tests
// any way to make this work?
// test("Main window web content", async () => {
//   const page = await electronApp.firstWindow();
//   const element = await page.$("#app", { strict: true });
//   expect(element, "Can't find root element").toBeDefined();
//   await new Promise((resolve) => setTimeout(resolve, 2500));
//   expect(
//     (await element.innerHTML()).trim(),
//     "Window content was empty"
//   ).not.equal("");
// });

test("Preload versions", async () => {
  const page = await electronApp.firstWindow();
  const exposedVersions = await page.evaluate(() => globalThis.versions);
  const expectedVersions = await electronApp.evaluate(() => process.versions);
  expect(exposedVersions).toBeDefined();
  expect(exposedVersions).to.deep.equal(expectedVersions);
});

test("Preload nodeCrypto", async () => {
  const page = await electronApp.firstWindow();

  const exposedNodeCrypto = await page.evaluate(() => globalThis.nodeCrypto);
  expect(exposedNodeCrypto).toHaveProperty("sha256sum");

  const sha256sumType = await page.evaluate(
    () => typeof globalThis.nodeCrypto.sha256sum
  );
  expect(sha256sumType).toEqual("function");

  const rawTestData = "raw data";
  const hash = await page.evaluate(
    (d: string) => globalThis.nodeCrypto.sha256sum(d),
    rawTestData
  );
  const expectedHash = createHash("sha256").update(rawTestData).digest("hex");
  expect(hash).toEqual(expectedHash);
});
