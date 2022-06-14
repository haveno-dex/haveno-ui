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

interface PaymentMethodsQuery {
  assetCode?: string;
}

interface PaymentMethodsValues {
  methodName: string;
  methodKey: string;
  rateTradeLimit: number;
  rateTradeLimitCurrency: string;
  info: string;
}

export function usePaymentMethods(query?: PaymentMethodsQuery) {
  return useQuery<Array<PaymentMethodsValues>, Error>(
    [QueryKeys.PaymentAccounts, query],
    // TODO: replace with actual implementation once haveno-ts is feature complete.
    () => Promise.resolve(data)
  );
}

const data = [
  {
    methodName: "Celpay",
    methodKey: "celpay",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodKey: "celpay2",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodKey: "celpay3",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodKey: "celpay4",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
] as Array<PaymentMethodsValues>;
