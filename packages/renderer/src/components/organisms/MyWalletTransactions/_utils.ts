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

import { isEmpty } from "lodash";
import type { XmrTx } from "haveno-ts";
import { HavenoUtils } from "haveno-ts";
import { WalletTransactionType } from "@molecules/WalletTransactions/_types";
import type { TWalletTransaction } from "@molecules/WalletTransactions/_types";

export const transfromXmrTxs = (
  xmrTxs: Array<XmrTx.AsObject>
): Array<TWalletTransaction> => {
  return xmrTxs.map(transfromXmrTx);
};

const transfromXmrTx = (xmrTx: XmrTx.AsObject): TWalletTransaction => ({
  type: isEmpty(xmrTx.incomingTransfersList)
    ? WalletTransactionType.Sent
    : WalletTransactionType.Received,

  fee: HavenoUtils.atomicUnitsToXmr(xmrTx.fee),
  height: xmrTx.height,

  // TODO: this skips incoming transfers of tx which has both incoming and outgoing transfer
  amount: !isEmpty(xmrTx.outgoingTransfer)
    ? HavenoUtils.atomicUnitsToXmr(xmrTx.outgoingTransfer?.amount || "0")
    : HavenoUtils.atomicUnitsToXmr(
        xmrTx.incomingTransfersList[0]?.amount || "0"
      ),

  amountCurrency: "XMR",
  transactionId: xmrTx.hash,

  timestamp: xmrTx.timestamp,

  incomingAddresses: xmrTx.incomingTransfersList?.map((addr) => addr.address),
  destinationAddresses: xmrTx.outgoingTransfer?.destinationsList?.map(
    (addr) => addr.address
  ),
});
