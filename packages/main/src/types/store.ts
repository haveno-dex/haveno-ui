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

import type { Schema } from "electron-store";

export enum StorageKeys {
  AccountInfo_Password = "accounInfo.password",
  AccountInfo_PrimaryFiat = "accounInfo.primaryFiat",
  Preferences_MoneroNode = "preferences.moneroNode",
}

// TS types for StoreSchema
export interface IStoreSchema {
  [StorageKeys.AccountInfo_Password]: IAccountInfo["password"];
  [StorageKeys.AccountInfo_PrimaryFiat]: IAccountInfo["primaryFiat"];
  [StorageKeys.Preferences_MoneroNode]: IPreferences["moneroNode"]; // TODO: change to object {url, password}
}

export interface IAccountInfo {
  password: Buffer;
  primaryFiat: string;
}

export interface AccountInfoDto extends Omit<IAccountInfo, "password"> {
  passwordHash: string;
}

export interface IPreferences {
  moneroNode: string;
}

// this schema is used by electron-store
// must mirror IStoreSchema
export const StoreSchema: Schema<IStoreSchema> = {
  [StorageKeys.AccountInfo_Password]: {
    type: "string",
  },
  [StorageKeys.AccountInfo_PrimaryFiat]: {
    type: "string",
  },
  [StorageKeys.Preferences_MoneroNode]: {
    type: "string",
  },
};

export interface SetPasswordInput {
  newPassword: string;
}

export interface ChangePasswordInput {
  currentPassword: string;
  newPassword: string;
}
