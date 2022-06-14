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

import { useIntl } from "react-intl";
import { LangKeys } from "@constants/lang";
import { useOffersFilterState } from "@src/state/offersFilter";

/**
 * Retrieve the active label of account details button.
 * @returns {string}
 */
export function useAccountDetailsLabel() {
  const { formatMessage } = useIntl();
  const [offersFilterState] = useOffersFilterState();

  return [
    [
      formatMessage({
        id: LangKeys.MarketOffersSigned,
        defaultMessage: "Signed",
      }),
      offersFilterState.signedAccounts,
    ],
    [
      formatMessage(
        {
          id: LangKeys.MarketOffersTradesAmount,
          defaultMessage: ">{value} days",
        },
        { value: offersFilterState.minimumTradesAmount }
      ),
      offersFilterState.minimumTradesAmount,
    ],
    [
      formatMessage(
        {
          id: LangKeys.MarketOffersDaysAge,
          defaultMessage: ">{value} days",
        },
        {
          value: offersFilterState.minimumAccountAge,
        }
      ),
      offersFilterState.minimumAccountAge,
    ],
  ]
    .filter((option) => option[1])
    .map((option) => option[0])
    .join(", ");
}

/**
 * Retrieve the active label of amount button.
 * @returns {string}
 */
export function useMarketOffersFilterAmountLabel() {
  const [offersFilterState] = useOffersFilterState();

  if (
    !offersFilterState.minimumBaseCurrencyAmount &&
    !offersFilterState.maximumBaseCurrencyAmount
  ) {
    return "";
  }
  const fromAmount = offersFilterState.minimumBaseCurrencyAmount || "~";
  const toAmount = offersFilterState.maximumBaseCurrencyAmount || "~";

  return `${fromAmount} - ${toAmount} XMR`;
}
