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
  IStoreSchema,
  IUserInfo,
  UserInfoInputType,
  IUserPermission,
} from "@src/types";
import { StoreKeys, StoreSchema } from "@src/types";

const store = new Store<IStoreSchema>({ schema: StoreSchema });

export function registerStoreHandlers() {
  ipcMain.handle("store:userinfo", async (_, payload?: UserInfoInputType) => {
    const prevData = store.get(StoreKeys.UserInfo);
    // retrieve encrypted data like so:
    // safeStorage.decryptString(Buffer.from(prevData.password));
    if (!payload) {
      return prevData;
    }
    const userInfo: IUserInfo = {
      ...payload,
      // encrypt sensitive data before storage
      password: safeStorage.encryptString(payload.password),
    };
    store.set(StoreKeys.UserInfo, {
      ...(prevData ?? {}),
      ...userInfo,
    });
    return store.get(StoreKeys.UserInfo);
  });

  ipcMain.handle(
    "store:permissions",
    async (_, permissions?: Array<IUserPermission>) => {
      const prevData = store.get(StoreKeys.Permissions);
      if (!permissions) {
        return prevData;
      }
      store.set(StoreKeys.Permissions, [...(prevData || []), ...permissions]);
      return store.get(StoreKeys.Permissions);
    }
  );
}
