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

export enum StoreKeys {
  UserInfo = "UserInfo",
  Permissions = "Permissions",
}

// TS types for StoreSchema
export interface IStoreSchema {
  [StoreKeys.UserInfo]: IUserInfo;
  [StoreKeys.Permissions]: Array<IUserPermission>;
}

export interface IUserInfo {
  username: string;
  password: Buffer;
}

export type UserInfoInputType = Omit<IUserInfo, "password"> & {
  password: string;
};

export interface IUserPermission {
  name: string;
}

// this schema is used by electron-store
// must mirror IStoreSchema
export const StoreSchema: Schema<IStoreSchema> = {
  [StoreKeys.UserInfo]: {
    type: "object",
    required: [],
    properties: {
      username: { type: "string" },
    },
  },
  [StoreKeys.Permissions]: {
    type: "array",
    default: [],
    items: {
      type: "object",
      required: [],
      properties: {
        name: { type: "string" },
      },
    },
  },
};
