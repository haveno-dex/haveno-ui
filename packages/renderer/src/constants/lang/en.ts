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

import { LangKeys } from "./LangKeys";

const LangPackEN: { [key in LangKeys]: string } = {
  [LangKeys.AppTitle]: "Welcome",
  [LangKeys.AppHeading2]: "Monero based decentralized exchange",
  [LangKeys.ConnectingToNetwork]: "Connecting to Monero Network",
  [LangKeys.Header]: "Haveno",
  [LangKeys.WelcomeToHaveno]:
    "Welcome to Haveno. The world’s first Monero based decentralised exchange.",
  [LangKeys.AccountTitle]: "Account",
  [LangKeys.AccountSidebarPaymentAccounts]: "Payment Accounts",
  [LangKeys.AccountSidebarSecurity]: "Security",
  [LangKeys.AccountSidebarWallet]: "Wallet",
  [LangKeys.AccountSidebarBackup]: "Backup",
  [LangKeys.AccountSidebarNodeSettings]: "Settings",
};

export default LangPackEN;
