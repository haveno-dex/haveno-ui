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

export enum QueryKeys {
  // Haveno
  Balances = "Haveno.Balances",
  HavenoVersion = "Haveno.Version",
  MoneroConnection = "Haveno.MoneroConnection",
  MoneroConnections = "Haveno.MoneroConnections",
  MoneroNodeIsRunning = "Haveno.MoneroNodeIsRunning",
  MoneroNodeSettings = "Haveno.MoneroNodeSettings",
  PaymentAccounts = "Haveno.PaymentAccounts",
  Prices = "Haveno.Prices",
  PrimaryAddress = "Haveno.PrimaryAddress",
  SyncStatus = "Haveno.SyncStatus",
  XmrSeed = "Haveno.XmrSeed",
  XmrPrimaryAddress = "Haveno.XmrPrimaryAddress",
  XmrTxs = "Haveno.XmrTransactions",

  // Storage
  StorageAccountInfo = "Storage.AccountInfo",
  StoragePreferences = "Storage.Preferences",
  StorageRemoteMoneroNode = "Storage.RemoteMoneroNode",
  StorageIsPasswordValid = "Storage.IsPasswordValid",

  // Others
  AuthSession = "AuthSession",
}
