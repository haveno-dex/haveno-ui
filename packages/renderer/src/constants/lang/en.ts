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
  [LangKeys.AccountNodeFieldBootstrapUrl]: "Bootstrap URL",
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

  [LangKeys.AccountWalletTitle]: "Your wallet details",
  [LangKeys.AccountWalletDesc]:
    "The Haveno wallet is permanently connected to your account. Solely saving your seed phrase is not enough to recover your account, you need to download a backup of your account, which you can download via the backup section.",
  [LangKeys.AccountWalletPassword]: "Password",
  [LangKeys.AccountCardCopyBtn]: "Copy",
  [LangKeys.AccountCardCopiedBtn]: "Copied",
  [LangKeys.AccountCardQRBtn]: "QR",
  [LangKeys.AddressCardCopyBtn]: "Copy",
  [LangKeys.AddressCardCopiedBtn]: "Copied",
  [LangKeys.AddressCardQRBtn]: "QR",
  [LangKeys.AddressCardQRCodeSavedSuccessNotif]:
    "The QR code has been saved successfully.",
  [LangKeys.MyWalletSendFieldAmount]: "Amount",
  [LangKeys.MyWalletSendFieldAddress]: "Address",
  [LangKeys.MyWalletSendFieldAddressPlaceholder]: "Paste in address here...",
  [LangKeys.MyWalletSendFieldPaymentId]: "Payment ID",
  [LangKeys.MyWalletSendFieldPaymentIdPlaceholder]: "Type",
  [LangKeys.MyWalletMoneroTotalBalance]: "Total Balance",
  [LangKeys.MyWalletMoneroAvailableBalance]: "Available Balance",
  [LangKeys.MyWalletMoneroReservedFunds]: "Reserved Funds",
  [LangKeys.MyWalletMoneroLockedFunds]: "Locked Funds",
  [LangKeys.MyWalletTabTransactions]: "Transactions",
  [LangKeys.MyWalletTabSend]: "Send",
  [LangKeys.MyWalletTabReceive]: "Receive",
  [LangKeys.MyWalletGenerateAddressBtn]: "Generate a new sub address",
  [LangKeys.MyWalletReceiveNoAddressesMsg]:
    "You don't have generated address, please generate one.",
  [LangKeys.MyWalletSendSuccessNotif]:
    "The XMR transaction has been sent successfully.",
  [LangKeys.WalletDetailSent]: "Sent",
  [LangKeys.WalletDetailReceived]: "Received",
  [LangKeys.WalletDetailTransactionId]: "Transaction ID",
  [LangKeys.WalletDetailFee]: "Fee",
  [LangKeys.WalletDetailDestinationAddress]: "Destination Address",
  [LangKeys.WalletDetailIncomingAddress]: "Incoming Address",
  [LangKeys.WalletDetailHeight]: "Height",
  [LangKeys.WalletDetailReceiptAddress]: "Receipt Address",
  [LangKeys.MyWalletBalancePrimaryAddress]: "Primary Address",
  [LangKeys.MyWalletSendBackToWallet]: "Back to Wallet",
  [LangKeys.MyWalletSendSuccessModalTitle]: "Fund are sent!",
  [LangKeys.MyWalletSendSuccessModalMsg]: "",
  [LangKeys.MyWalletReceiveTitle]: "Your Address",
  [LangKeys.MyWalletQRModalPrimaryAddress]: "Primary Address",
  [LangKeys.MyWalletQRModalReturnBtn]: "Return",
  [LangKeys.MyWalletQRModalDownloadQRBtn]: "Download QR",
  [LangKeys.AccountBackupDownloadTitle]: "Download your backup file",
  [LangKeys.AccountBackupDownloadDesc]:
    "To be able to restore your Haveno account you need to create a backup file of your account. Keep it somewhere safe.",
  [LangKeys.AccountBackupDownloadBtn]: "Download backup file",
  [LangKeys.AccountBackupRestoreTitle]: "Restore an existing backup file",
  [LangKeys.AccountBackupRestoreDesc]:
    "When you restore an existing backup file of your Haveno account, you will lose the account you’re using currently. Please use with caution.",
  [LangKeys.AccountBackupRestoreBtn]: "Restore backup",
  [LangKeys.AccountBackupDownloadSuccessNotif]:
    "The backup has been downloaded successfully.",
  [LangKeys.AccountBackupRestoreSuccessNotif]:
    "The backup has been restored successfully.",
  [LangKeys.MarketsOffersColumnPrice]: "Price",
  [LangKeys.MarketsOffersColumnAmount]: "Amount",
  [LangKeys.MarketsOffersColumnCost]: "Costs",
  [LangKeys.MarketsOffersColumnAccountAge]: "Account Age",
  [LangKeys.MarketsOffersColumnAccountTrades]: "Account Trades",
  [LangKeys.MarketsOffersColumnPaymentMethod]: "Payment Method",
};

export default LangPackEN;
