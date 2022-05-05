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

import { ReactComponent as BtcLogo } from "@assets/btc.svg";
import { ReactComponent as EthLogo } from "@assets/eth.svg";
import { ReactComponent as EurLogo } from "@assets/eur.svg";
import { PaymentMethodIds } from "./payment-methods";

export const SupportedCurrencies = [
  {
    id: "BTC",
    name: "Bitcoin",
    logo: BtcLogo,
    paymentMethods: [PaymentMethodIds.BLOCK_CHAINS_ID],
  },
  {
    id: "ETH",
    name: "Ethereum",
    logo: EthLogo,
    paymentMethods: [PaymentMethodIds.BLOCK_CHAINS_ID],
  },
  {
    id: "EUR",
    name: "Euro",
    logo: EurLogo,
    paymentMethods: [
      // EUR
      PaymentMethodIds.SEPA_ID,
      PaymentMethodIds.SEPA_INSTANT_ID,
      PaymentMethodIds.MONEY_BEAM_ID,
      // UK
      PaymentMethodIds.FASTER_PAYMENTS_ID,
      // Sweden
      PaymentMethodIds.SWISH_ID,
      // Global
      PaymentMethodIds.CASH_DEPOSIT_ID,
      PaymentMethodIds.CASH_BY_MAIL_ID,
      PaymentMethodIds.MONEY_GRAM_ID,
      PaymentMethodIds.WESTERN_UNION_ID,
      PaymentMethodIds.NATIONAL_BANK_ID,
      PaymentMethodIds.SAME_BANK_ID,
      PaymentMethodIds.SPECIFIC_BANKS_ID,
      PaymentMethodIds.HAL_CASH_ID,
      PaymentMethodIds.F2F_ID,
      PaymentMethodIds.AMAZON_GIFT_CARD_ID,

      // Trans national
      PaymentMethodIds.UPHOLD_ID,
      PaymentMethodIds.REVOLUT_ID,
      PaymentMethodIds.PERFECT_MONEY_ID,
      PaymentMethodIds.ADVANCED_CASH_ID,
      PaymentMethodIds.TRANSFERWISE_ID,
      PaymentMethodIds.TRANSFERWISE_USD_ID,
      PaymentMethodIds.PAYSERA_ID,
      PaymentMethodIds.PAXUM_ID,
      PaymentMethodIds.NEQUI_ID,
      PaymentMethodIds.BIZUM_ID,
      PaymentMethodIds.PIX_ID,
      PaymentMethodIds.CAPITUAL_ID,
      PaymentMethodIds.CELPAY_ID,
      PaymentMethodIds.MONESE_ID,
      PaymentMethodIds.SATISPAY_ID,
      PaymentMethodIds.TIKKIE_ID,
      PaymentMethodIds.VERSE_ID,
      PaymentMethodIds.STRIKE_ID,
      PaymentMethodIds.SWIFT_ID,
      PaymentMethodIds.ACH_TRANSFER_ID,
      PaymentMethodIds.DOMESTIC_WIRE_TRANSFER_ID,
    ],
  },
  {
    id: "USD",
    name: "US Dollar",
    logo: EurLogo,
    paymentMethods: [
      // US
      PaymentMethodIds.CLEAR_X_CHANGE_ID,
      PaymentMethodIds.POPMONEY_ID,
      PaymentMethodIds.US_POSTAL_MONEY_ORDER_ID,
      // Global
      PaymentMethodIds.CASH_DEPOSIT_ID,
      PaymentMethodIds.CASH_BY_MAIL_ID,
      PaymentMethodIds.MONEY_GRAM_ID,
      PaymentMethodIds.WESTERN_UNION_ID,
      PaymentMethodIds.NATIONAL_BANK_ID,
      PaymentMethodIds.SAME_BANK_ID,
      PaymentMethodIds.SPECIFIC_BANKS_ID,
      PaymentMethodIds.HAL_CASH_ID,
      PaymentMethodIds.F2F_ID,
      PaymentMethodIds.AMAZON_GIFT_CARD_ID,

      // Trans national
      PaymentMethodIds.UPHOLD_ID,
      PaymentMethodIds.REVOLUT_ID,
      PaymentMethodIds.PERFECT_MONEY_ID,
      PaymentMethodIds.ADVANCED_CASH_ID,
      PaymentMethodIds.TRANSFERWISE_ID,
      PaymentMethodIds.TRANSFERWISE_USD_ID,
      PaymentMethodIds.PAYSERA_ID,
      PaymentMethodIds.PAXUM_ID,
      PaymentMethodIds.NEQUI_ID,
      PaymentMethodIds.BIZUM_ID,
      PaymentMethodIds.PIX_ID,
      PaymentMethodIds.CAPITUAL_ID,
      PaymentMethodIds.CELPAY_ID,
      PaymentMethodIds.MONESE_ID,
      PaymentMethodIds.SATISPAY_ID,
      PaymentMethodIds.TIKKIE_ID,
      PaymentMethodIds.VERSE_ID,
      PaymentMethodIds.STRIKE_ID,
      PaymentMethodIds.SWIFT_ID,
      PaymentMethodIds.ACH_TRANSFER_ID,
      PaymentMethodIds.DOMESTIC_WIRE_TRANSFER_ID,
    ],
  },
];
