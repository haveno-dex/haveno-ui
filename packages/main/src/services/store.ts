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

import { ipcMain, safeStorage } from "electron";
import Store from "electron-store";
import type {
  AccountInfoDto,
  ChangePasswordInput,
  IPreferences,
  IStoreSchema,
  SetPasswordInput,
} from "@src/types";
import { StorageKeys } from "@src/types";
import { IpcChannels, StoreSchema } from "@src/types";
import {
  createAuthToken,
  hashPassword,
  verifyAuthAuthToken,
  verifyPassword,
} from "@src/utils/password";

const store = new Store<IStoreSchema>({ schema: StoreSchema });

export function registerStoreHandlers() {
  ipcMain.handle(IpcChannels.SetPassword, async (_, data: SetPasswordInput) => {
    const encryptedPassword = store.get(StorageKeys.AccountInfo_Password);
    if (encryptedPassword) {
      throw new Error("[[Can't set password]]");
    }
    const hash = await hashPassword(data.newPassword);
    store.set(
      StorageKeys.AccountInfo_Password,
      safeStorage.encryptString(hash)
    );
  });

  ipcMain.handle(
    IpcChannels.ChangePassword,
    async (_, data: ChangePasswordInput): Promise<string> => {
      const encryptedPassword = store.get(StorageKeys.AccountInfo_Password);
      if (!encryptedPassword) {
        throw new Error("[[No password currently set]]");
      }
      // verify old password
      const oldPassHash = safeStorage.decryptString(
        Buffer.from(encryptedPassword)
      );
      if (!("currentPassword" in data)) {
        throw new Error("[[Current password required]]");
      }
      if (!(await verifyPassword(data.currentPassword, oldPassHash))) {
        throw new Error("[[Current password doesn't match]]");
      }
      const hash = await hashPassword(data.newPassword);
      store.set(
        StorageKeys.AccountInfo_Password,
        safeStorage.encryptString(hash)
      );
      // generate and return a new authToken
      return createAuthToken(hash);
    }
  );

  ipcMain.handle(IpcChannels.SetPrimaryFiat, (_, value: string) => {
    store.set(StorageKeys.AccountInfo_PrimaryFiat, value);
  });

  ipcMain.handle(IpcChannels.GetAccountInfo, (): AccountInfoDto | null => {
    const encryptedPassword = store.get(StorageKeys.AccountInfo_Password);
    if (!encryptedPassword) {
      return null;
    }
    return {
      passwordHash: safeStorage.decryptString(Buffer.from(encryptedPassword)),
      primaryFiat: store.get(StorageKeys.AccountInfo_PrimaryFiat),
    };
  });

  // returns null if password is incorrect. returns jwt if password is correct
  ipcMain.handle(
    IpcChannels.VerifyPassword,
    async (_, plainText: string): Promise<string | null> => {
      const encryptedPassword = store.get(StorageKeys.AccountInfo_Password);
      if (!encryptedPassword) {
        return null;
      }
      const hash = safeStorage.decryptString(Buffer.from(encryptedPassword));
      if (!(await verifyPassword(plainText, hash))) {
        return null;
      }
      return createAuthToken(hash);
    }
  );

  ipcMain.handle(
    IpcChannels.VerifyAuthToken,
    async (_, token: string): Promise<boolean> => {
      const encryptedPassword = store.get(StorageKeys.AccountInfo_Password);
      if (!encryptedPassword) {
        return false;
      }
      const hash = safeStorage.decryptString(Buffer.from(encryptedPassword));
      return verifyAuthAuthToken(token, hash);
    }
  );

  // set or clear remote node url; empty indicates local node
  ipcMain.handle(IpcChannels.SetMoneroNode, async (_, uri?: string) => {
    if (!uri) {
      store.delete(StorageKeys.Preferences_SelectedNode);
    } else {
      store.set(StorageKeys.Preferences_SelectedNode, uri);
    }
  });

  // fetch the complete set of user preferences
  ipcMain.handle(
    IpcChannels.GetPreferences,
    async (): Promise<IPreferences> => {
      return {
        selectedNode: store.get(StorageKeys.Preferences_SelectedNode),
      };
    }
  );
}
