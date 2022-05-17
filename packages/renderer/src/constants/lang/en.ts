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
  [LangKeys.Save]: "Save",
  [LangKeys.AccountTitle]: "Account",
  [LangKeys.AccountSidebarPaymentAccounts]: "Payment Accounts",
  [LangKeys.AccountSidebarSecurity]: "Security",
  [LangKeys.AccountSidebarWallet]: "Wallet",
  [LangKeys.AccountSidebarBackup]: "Backup",
  [LangKeys.AccountSidebarNodeSettings]: "Settings",
  [LangKeys.AccountSecurityTitle]: "Account Security",
  [LangKeys.AccountSecurityDesc]:
    "Haveno does not store any of your data, this happens solely locally on your device. It’s not possible to restore your password when lost. Please make sure you store a copy of it on a safe place.",
  [LangKeys.AccountNodeSettingsDesc]:
    "Using a local node is  recommended, but does require loading the entire blockchain. Choose ‘remote node’ if you prefer a faster but less secure experience.",
  [LangKeys.AccountNodeSettingsTitle]: "Your node settings",
  [LangKeys.AccountNodeSettingsLocal]: "Local Node",
  [LangKeys.AccountNodeSettingsRemote]: "Remote Node",
  [LangKeys.AccountNodeFieldBlockchainLocation]: "Blockchain location",
  [LangKeys.AccountNodeFieldDaemonAddress]: "Daemon Address",
  [LangKeys.AccountNodeFieldPort]: "Port",
  [LangKeys.AccountNodeFieldDaemonFlags]: "Daemon startup flags",
  [LangKeys.AccountNodeStopDaemon]: "Stop daemon",
  [LangKeys.AccountNodeStartDaemon]: "Start daemon",
  [LangKeys.AccountNodeLocalSaveNotification]:
    "Local node settings updated successfully",
  [LangKeys.AccountNodeDaemonStoppedNotif]: "Daemon stopped successfully",
  [LangKeys.AccountNodeDaemonStartedNotif]: "Daemon started successfully",
  [LangKeys.AccountSettingsAddNode]: "Add a new node",
  [LangKeys.AccountSettingsCurrent]: "Current",
  [LangKeys.AccountSecurityFieldPassword]: "Update account password",
  [LangKeys.AccountSecurityFieldRepeatPassword]: "Repeat new password",
  [LangKeys.AccountSecurityFieldCurrentPassword]: "Current password",
  [LangKeys.AccountSecurityFieldPasswordFormatMsg]:
    "Password must contain atleast {minChars} characters, one uppercase, one lowercase and one number.",
  [LangKeys.AccountSecurityFieldRepeatPasswordMatchMsg]:
    "Passwords don't match",
  [LangKeys.CreatePassword]: "Create password",
};

export default LangPackEN;
