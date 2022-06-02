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

import { useQuery } from "react-query";
import { QueryKeys } from "@constants/query-keys";
import { useHavenoClient } from "./useHavenoClient";

interface BalanceInfo {
  balance: number;
  unlockedBalance: number;
  lockedBalance: number;
  reservedOfferBalance: number;
  reservedTradeBalance: number;
  availableBalance: number;
  reservedBalance: number;
  total: number;
}

export function useBalances() {
  const client = useHavenoClient();

  return useQuery<BalanceInfo, Error>(QueryKeys.Balances, async () => {
    const xmrBalances = await client.getBalances();
    const balances = xmrBalances.toObject();

    const balance = parseFloat(balances.balance);
    const unlockedBalance = parseFloat(balances.unlockedBalance);
    const lockedBalance = parseFloat(balances.lockedBalance);
    const reservedOfferBalance = parseFloat(balances.reservedOfferBalance);
    const reservedTradeBalance = parseFloat(balances.reservedTradeBalance);

    const availableBalance = unlockedBalance;
    const reservedBalance = reservedOfferBalance + reservedTradeBalance;
    const total = availableBalance + lockedBalance + reservedBalance;

    return {
      balance,
      unlockedBalance,
      lockedBalance,
      reservedOfferBalance,
      reservedTradeBalance,
      availableBalance,
      reservedBalance,
      total,
    };
  });
}
