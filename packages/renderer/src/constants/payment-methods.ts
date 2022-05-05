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

import startCase from "lodash/startCase";
import camelCase from "lodash/camelCase";

// Ref: https://github.com/bisq-network/bisq/blob/master/core/src/main/java/bisq/core/payment/payload/PaymentMethod.java

const DEFAULT_TRADE_LIMIT_VERY_LOW_RISK = 1;
const DEFAULT_TRADE_LIMIT_LOW_RISK = 0.5;
const DEFAULT_TRADE_LIMIT_MID_RISK = 0.25;
const DEFAULT_TRADE_LIMIT_HIGH_RISK = 0.125;

export enum PaymentMethodIds {
  UPHOLD_ID = "UPHOLD",
  MONEY_BEAM_ID = "MONEY_BEAM",
  POPMONEY_ID = "POPMONEY",
  REVOLUT_ID = "REVOLUT",
  PERFECT_MONEY_ID = "PERFECT_MONEY",
  SEPA_ID = "SEPA",
  SEPA_INSTANT_ID = "SEPA_INSTANT",
  FASTER_PAYMENTS_ID = "FASTER_PAYMENTS",
  NATIONAL_BANK_ID = "NATIONAL_BANK",
  JAPAN_BANK_ID = "JAPAN_BANK",
  AUSTRALIA_PAYID_ID = "AUSTRALIA_PAYID",
  SAME_BANK_ID = "SAME_BANK",
  SPECIFIC_BANKS_ID = "SPECIFIC_BANKS",
  SWISH_ID = "SWISH",
  ALI_PAY_ID = "ALI_PAY",
  WECHAT_PAY_ID = "WECHAT_PAY",
  CLEAR_X_CHANGE_ID = "CLEAR_X_CHANGE",

  INTERAC_E_TRANSFER_ID = "INTERAC_E_TRANSFER",
  US_POSTAL_MONEY_ORDER_ID = "US_POSTAL_MONEY_ORDER",
  CASH_DEPOSIT_ID = "CASH_DEPOSIT",
  MONEY_GRAM_ID = "MONEY_GRAM",
  WESTERN_UNION_ID = "WESTERN_UNION",
  HAL_CASH_ID = "HAL_CASH",
  F2F_ID = "F2F",
  BLOCK_CHAINS_ID = "BLOCK_CHAINS",
  PROMPT_PAY_ID = "PROMPT_PAY",
  ADVANCED_CASH_ID = "ADVANCED_CASH",
  TRANSFERWISE_ID = "TRANSFERWISE",
  TRANSFERWISE_USD_ID = "TRANSFERWISE_USD",
  PAYSERA_ID = "PAYSERA",
  PAXUM_ID = "PAXUM",
  NEFT_ID = "NEFT",
  RTGS_ID = "RTGS",
  IMPS_ID = "IMPS",
  UPI_ID = "UPI",
  PAYTM_ID = "PAYTM",
  NEQUI_ID = "NEQUI",
  BIZUM_ID = "BIZUM",
  PIX_ID = "PIX",
  AMAZON_GIFT_CARD_ID = "AMAZON_GIFT_CARD",
  BLOCK_CHAINS_INSTANT_ID = "BLOCK_CHAINS_INSTANT",
  CASH_BY_MAIL_ID = "CASH_BY_MAIL",
  CAPITUAL_ID = "CAPITUAL",
  CELPAY_ID = "CELPAY",
  MONESE_ID = "MONESE",
  SATISPAY_ID = "SATISPAY",
  TIKKIE_ID = "TIKKIE",
  VERSE_ID = "VERSE",
  STRIKE_ID = "STRIKE",
  SWIFT_ID = "SWIFT",
  ACH_TRANSFER_ID = "ACH_TRANSFER",
  DOMESTIC_WIRE_TRANSFER_ID = "DOMESTIC_WIRE_TRANSFER",
}

const HOUR = 3_600_000; // ms in 1 hour
const DAY = 86_400_000; // ms in 1 day

export const PaymentMethods: Record<
  PaymentMethodIds,
  {
    id: PaymentMethodIds;
    name: string;
    maxTradePeriod: number;
    maxTradeLimit: number;
  }
> = {
  // EUR
  [PaymentMethodIds.SEPA_ID]: {
    id: PaymentMethodIds.SEPA_ID,
    name: startCase(camelCase(PaymentMethodIds.SEPA_ID)),
    maxTradePeriod: 6 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.SEPA_INSTANT_ID]: {
    id: PaymentMethodIds.SEPA_INSTANT_ID,
    name: startCase(camelCase(PaymentMethodIds.SEPA_INSTANT_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.MONEY_BEAM_ID]: {
    id: PaymentMethodIds.MONEY_BEAM_ID,
    name: startCase(camelCase(PaymentMethodIds.MONEY_BEAM_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },

  // UK
  [PaymentMethodIds.FASTER_PAYMENTS_ID]: {
    id: PaymentMethodIds.FASTER_PAYMENTS_ID,
    name: startCase(camelCase(PaymentMethodIds.FASTER_PAYMENTS_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },

  // Sweden
  [PaymentMethodIds.SWISH_ID]: {
    id: PaymentMethodIds.SWISH_ID,
    name: startCase(camelCase(PaymentMethodIds.SWISH_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },

  // US
  [PaymentMethodIds.CLEAR_X_CHANGE_ID]: {
    id: PaymentMethodIds.CLEAR_X_CHANGE_ID,
    name: startCase(camelCase(PaymentMethodIds.CLEAR_X_CHANGE_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },

  [PaymentMethodIds.POPMONEY_ID]: {
    id: PaymentMethodIds.POPMONEY_ID,
    name: startCase(camelCase(PaymentMethodIds.POPMONEY_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.US_POSTAL_MONEY_ORDER_ID]: {
    id: PaymentMethodIds.US_POSTAL_MONEY_ORDER_ID,
    name: startCase(camelCase(PaymentMethodIds.US_POSTAL_MONEY_ORDER_ID)),
    maxTradePeriod: 8 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },

  // Canada
  [PaymentMethodIds.INTERAC_E_TRANSFER_ID]: {
    id: PaymentMethodIds.INTERAC_E_TRANSFER_ID,
    name: startCase(camelCase(PaymentMethodIds.INTERAC_E_TRANSFER_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },

  // Global
  [PaymentMethodIds.CASH_DEPOSIT_ID]: {
    id: PaymentMethodIds.CASH_DEPOSIT_ID,
    name: startCase(camelCase(PaymentMethodIds.CASH_DEPOSIT_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.CASH_BY_MAIL_ID]: {
    id: PaymentMethodIds.CASH_BY_MAIL_ID,
    name: startCase(camelCase(PaymentMethodIds.CASH_BY_MAIL_ID)),
    maxTradePeriod: 8 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.MONEY_GRAM_ID]: {
    id: PaymentMethodIds.MONEY_GRAM_ID,
    name: startCase(camelCase(PaymentMethodIds.MONEY_GRAM_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_MID_RISK,
  },
  [PaymentMethodIds.WESTERN_UNION_ID]: {
    id: PaymentMethodIds.WESTERN_UNION_ID,
    name: startCase(camelCase(PaymentMethodIds.WESTERN_UNION_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_MID_RISK,
  },
  [PaymentMethodIds.NATIONAL_BANK_ID]: {
    id: PaymentMethodIds.NATIONAL_BANK_ID,
    name: startCase(camelCase(PaymentMethodIds.NATIONAL_BANK_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.SAME_BANK_ID]: {
    id: PaymentMethodIds.SAME_BANK_ID,
    name: startCase(camelCase(PaymentMethodIds.SAME_BANK_ID)),
    maxTradePeriod: 2 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.SPECIFIC_BANKS_ID]: {
    id: PaymentMethodIds.SPECIFIC_BANKS_ID,
    name: startCase(camelCase(PaymentMethodIds.SPECIFIC_BANKS_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.HAL_CASH_ID]: {
    id: PaymentMethodIds.HAL_CASH_ID,
    name: startCase(camelCase(PaymentMethodIds.HAL_CASH_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },
  [PaymentMethodIds.F2F_ID]: {
    id: PaymentMethodIds.F2F_ID,
    name: startCase(camelCase(PaymentMethodIds.F2F_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },
  [PaymentMethodIds.AMAZON_GIFT_CARD_ID]: {
    id: PaymentMethodIds.AMAZON_GIFT_CARD_ID,
    name: startCase(camelCase(PaymentMethodIds.AMAZON_GIFT_CARD_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },

  // Trans national
  [PaymentMethodIds.UPHOLD_ID]: {
    id: PaymentMethodIds.UPHOLD_ID,
    name: startCase(camelCase(PaymentMethodIds.UPHOLD_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.REVOLUT_ID]: {
    id: PaymentMethodIds.REVOLUT_ID,
    name: startCase(camelCase(PaymentMethodIds.REVOLUT_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.PERFECT_MONEY_ID]: {
    id: PaymentMethodIds.PERFECT_MONEY_ID,
    name: startCase(camelCase(PaymentMethodIds.PERFECT_MONEY_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },
  [PaymentMethodIds.ADVANCED_CASH_ID]: {
    id: PaymentMethodIds.ADVANCED_CASH_ID,
    name: startCase(camelCase(PaymentMethodIds.ADVANCED_CASH_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_VERY_LOW_RISK,
  },
  [PaymentMethodIds.TRANSFERWISE_ID]: {
    id: PaymentMethodIds.TRANSFERWISE_ID,
    name: startCase(camelCase(PaymentMethodIds.TRANSFERWISE_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.TRANSFERWISE_USD_ID]: {
    id: PaymentMethodIds.TRANSFERWISE_USD_ID,
    name: startCase(camelCase(PaymentMethodIds.TRANSFERWISE_USD_ID)),
    maxTradePeriod: 4 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.PAYSERA_ID]: {
    id: PaymentMethodIds.PAYSERA_ID,
    name: startCase(camelCase(PaymentMethodIds.PAYSERA_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.PAXUM_ID]: {
    id: PaymentMethodIds.PAXUM_ID,
    name: startCase(camelCase(PaymentMethodIds.PAXUM_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.NEFT_ID]: {
    id: PaymentMethodIds.NEFT_ID,
    name: startCase(camelCase(PaymentMethodIds.NEFT_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: 0.02,
  },
  [PaymentMethodIds.RTGS_ID]: {
    id: PaymentMethodIds.RTGS_ID,
    name: startCase(camelCase(PaymentMethodIds.RTGS_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.IMPS_ID]: {
    id: PaymentMethodIds.IMPS_ID,
    name: startCase(camelCase(PaymentMethodIds.IMPS_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.UPI_ID]: {
    id: PaymentMethodIds.UPI_ID,
    name: startCase(camelCase(PaymentMethodIds.UPI_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: 0.05,
  },
  [PaymentMethodIds.PAYTM_ID]: {
    id: PaymentMethodIds.PAYTM_ID,
    name: startCase(camelCase(PaymentMethodIds.PAYTM_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: 0.05,
  },
  [PaymentMethodIds.NEQUI_ID]: {
    id: PaymentMethodIds.NEQUI_ID,
    name: startCase(camelCase(PaymentMethodIds.NEQUI_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.BIZUM_ID]: {
    id: PaymentMethodIds.BIZUM_ID,
    name: startCase(camelCase(PaymentMethodIds.BIZUM_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: 0.04,
  },
  [PaymentMethodIds.PIX_ID]: {
    id: PaymentMethodIds.PIX_ID,
    name: startCase(camelCase(PaymentMethodIds.PIX_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.CAPITUAL_ID]: {
    id: PaymentMethodIds.CAPITUAL_ID,
    name: startCase(camelCase(PaymentMethodIds.CAPITUAL_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.CELPAY_ID]: {
    id: PaymentMethodIds.CELPAY_ID,
    name: startCase(camelCase(PaymentMethodIds.CELPAY_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.MONESE_ID]: {
    id: PaymentMethodIds.MONESE_ID,
    name: startCase(camelCase(PaymentMethodIds.MONESE_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.SATISPAY_ID]: {
    id: PaymentMethodIds.SATISPAY_ID,
    name: startCase(camelCase(PaymentMethodIds.SATISPAY_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.TIKKIE_ID]: {
    id: PaymentMethodIds.TIKKIE_ID,
    name: startCase(camelCase(PaymentMethodIds.TIKKIE_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: 0.05,
  },
  [PaymentMethodIds.VERSE_ID]: {
    id: PaymentMethodIds.VERSE_ID,
    name: startCase(camelCase(PaymentMethodIds.VERSE_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.STRIKE_ID]: {
    id: PaymentMethodIds.STRIKE_ID,
    name: startCase(camelCase(PaymentMethodIds.STRIKE_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.SWIFT_ID]: {
    id: PaymentMethodIds.SWIFT_ID,
    name: startCase(camelCase(PaymentMethodIds.SWIFT_ID)),
    maxTradePeriod: 7 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_MID_RISK,
  },
  [PaymentMethodIds.ACH_TRANSFER_ID]: {
    id: PaymentMethodIds.ACH_TRANSFER_ID,
    name: startCase(camelCase(PaymentMethodIds.ACH_TRANSFER_ID)),
    maxTradePeriod: 5 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },
  [PaymentMethodIds.DOMESTIC_WIRE_TRANSFER_ID]: {
    id: PaymentMethodIds.DOMESTIC_WIRE_TRANSFER_ID,
    name: startCase(camelCase(PaymentMethodIds.DOMESTIC_WIRE_TRANSFER_ID)),
    maxTradePeriod: 3 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_HIGH_RISK,
  },

  // Japan
  [PaymentMethodIds.JAPAN_BANK_ID]: {
    id: PaymentMethodIds.JAPAN_BANK_ID,
    name: startCase(camelCase(PaymentMethodIds.JAPAN_BANK_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },

  // Australia
  [PaymentMethodIds.AUSTRALIA_PAYID_ID]: {
    id: PaymentMethodIds.AUSTRALIA_PAYID_ID,
    name: startCase(camelCase(PaymentMethodIds.AUSTRALIA_PAYID_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },

  // China
  [PaymentMethodIds.ALI_PAY_ID]: {
    id: PaymentMethodIds.ALI_PAY_ID,
    name: startCase(camelCase(PaymentMethodIds.ALI_PAY_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },
  [PaymentMethodIds.WECHAT_PAY_ID]: {
    id: PaymentMethodIds.WECHAT_PAY_ID,
    name: startCase(camelCase(PaymentMethodIds.WECHAT_PAY_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },

  // Thailand
  [PaymentMethodIds.PROMPT_PAY_ID]: {
    id: PaymentMethodIds.PROMPT_PAY_ID,
    name: startCase(camelCase(PaymentMethodIds.PROMPT_PAY_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_LOW_RISK,
  },

  // Altcoins
  [PaymentMethodIds.BLOCK_CHAINS_ID]: {
    id: PaymentMethodIds.BLOCK_CHAINS_ID,
    name: startCase(camelCase(PaymentMethodIds.BLOCK_CHAINS_ID)),
    maxTradePeriod: 1 * DAY,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_VERY_LOW_RISK,
  },

  // Altcoins with 1 hour trade period
  [PaymentMethodIds.BLOCK_CHAINS_INSTANT_ID]: {
    id: PaymentMethodIds.BLOCK_CHAINS_INSTANT_ID,
    name: startCase(camelCase(PaymentMethodIds.BLOCK_CHAINS_INSTANT_ID)),
    maxTradePeriod: HOUR,
    maxTradeLimit: DEFAULT_TRADE_LIMIT_VERY_LOW_RISK,
  },
};
