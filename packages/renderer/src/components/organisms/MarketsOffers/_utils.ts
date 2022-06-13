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

import type { MarketOfferData } from "@hooks/haveno/useMarketsOffers";
import type { MarketOffer } from "@organisms/MarketOffersTable";

export const transformToMarketsOffers = (
  offers: Array<MarketOfferData>
): Array<MarketOffer> => {
  return offers.map((offer) => ({
    price: offer.price,
    priceCurrency: offer.counterCurrencyCode,
    amount: offer.amount,
    amountCurrency: offer.baseCurrencyCode,
    costCurrency: offer.baseCurrencyCode,
    paymentMethod: offer.paymentMethodShortName,
    cost: offer.txFee,
    priceComparison: 0.1,
    accountAge: 1,
    accountTrades: 1,
  }));
};
