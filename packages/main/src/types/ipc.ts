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

export enum IpcChannels {
  GetAccountInfo = "store:accountInfo",
  SetPassword = "store:accountinfo.setPassword",
  ChangePassword = "store:accountinfo.changePassword",
  VerifyPassword = "store:accountinfo.verifyPassword",
  SetPrimaryFiat = "store:accountinfo.primaryFiat",
  GetPreferences = "store:preferences",
  SetMoneroNode = "store:preferences.moneroNode",

  VerifyAuthToken = "verifyAuthToken",
}
