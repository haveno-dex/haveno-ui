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

import fsPromises from "fs/promises";
import { ipcMain, dialog } from "electron";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import QRCode from "qrcode/lib/server";
import type { DownloadBackupInput } from "@src/types";
import { IpcChannels } from "@src/types";

export function registerHavenoHandlers() {
  ipcMain.handle(
    IpcChannels.DownloadBackup,
    async (_, data: DownloadBackupInput) => {
      const file = await dialog.showSaveDialog({
        defaultPath: "haveno-backup",
        filters: [
          {
            extensions: ["zip"],
            name: "*",
          },
        ],
        properties: ["createDirectory", "dontAddToRecent"],
      });
      if (!file?.filePath) {
        return 0;
      }
      await fsPromises.writeFile(file.filePath, new Uint8Array(data.bytes));
    }
  );

  ipcMain.handle(IpcChannels.RestoreBackup, async (): Promise<Uint8Array> => {
    const files = await dialog.showOpenDialog({
      filters: [
        {
          extensions: ["zip"],
          name: "*",
        },
      ],
      properties: ["openFile", "dontAddToRecent"],
    });
    if (!files?.filePaths[0]) {
      return new Uint8Array();
    }
    const zipFile = files.filePaths[0];
    return new Uint8Array(await fsPromises.readFile(zipFile));
  });

  ipcMain.handle(
    IpcChannels.DownloadQRCode,
    async (_, code: string): Promise<void> => {
      const file = await dialog.showSaveDialog({
        defaultPath: "qr-code",
        filters: [
          {
            extensions: ["png"],
            name: "*",
          },
        ],
        properties: ["createDirectory", "dontAddToRecent"],
      });
      if (!file?.filePath) {
        return;
      }
      QRCode.toFile(
        file.filePath,
        code,
        {
          width: 500,
        },
        (err: Error) => {
          if (err) throw err;
        }
      );
    }
  );
}
