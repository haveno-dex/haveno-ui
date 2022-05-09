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

import { ipcRenderer } from "electron";
import { exposeInMainWorld } from "./exposeInMainWorld";
import type {
  AccountInfoDto,
  ChangePasswordInput,
  IPreferences,
  SetPasswordInput,
} from "./types";
import { IpcChannels } from "./types";

// Export for types in contracts.d.ts
export const store = {
  setPassword: async (data: SetPasswordInput): Promise<void> =>
    ipcRenderer.invoke(IpcChannels.SetPassword, data),

  // returns jwt on success
  changePassword: async (data: ChangePasswordInput): Promise<string> =>
    ipcRenderer.invoke(IpcChannels.ChangePassword, data),

  // returns jwt on success; null on failure
  verifyPassword: async (plainText: string): Promise<string | null> =>
    ipcRenderer.invoke(IpcChannels.VerifyPassword, plainText),

  verifyAuthToken: async (token: string): Promise<boolean> =>
    ipcRenderer.invoke(IpcChannels.VerifyAuthToken, token),

  setPrimaryFiat: async (value: string): Promise<void> =>
    ipcRenderer.invoke(IpcChannels.SetPrimaryFiat, value),

  getAccountInfo: async (): Promise<AccountInfoDto> =>
    ipcRenderer.invoke(IpcChannels.GetAccountInfo),

  setMoneroNode: async (value: string): Promise<void> =>
    ipcRenderer.invoke(IpcChannels.SetMoneroNode, value),

  getPreferences: async (): Promise<IPreferences> =>
    ipcRenderer.invoke(IpcChannels.GetPreferences),
};

exposeInMainWorld("electronStore", store);
