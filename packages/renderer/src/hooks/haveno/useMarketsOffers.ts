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
import type { OfferInfo } from "haveno-ts";
import { useHavenoClient } from "./useHavenoClient";
import { QueryKeys } from "@constants/query-keys";

interface MarketsOfferesQuery {
  assetCode: string;
  direction?: "buy" | "sell";
}

export function useMarketsOffers(query: MarketsOfferesQuery) {
  const client = useHavenoClient();

  return useQuery<Array<MarketOfferData>, Error>(
    [QueryKeys.MarketsOffers, query],
    async () => {
      const offers = await client.getMyOffers(query.assetCode);
      return transformData(offers);
    }
  );
}

const transformData = (offers: Array<OfferInfo>) => {
  return offers.map((offerObj: OfferInfo): MarketOfferData => {
    const offer = offerObj.toObject();

    return {
      ...offer,
      price: parseFloat(offer.price),
      volume: parseFloat(offer.volume),
      minVolume: parseFloat(offer.minVolume),
      triggerPrice: parseFloat(offer.triggerPrice),
    };
  });
};

export interface MarketOfferData {
  id: string;
  direction: string;
  price: number;
  useMarketBasedPrice: boolean;
  marketPriceMarginPct: number;
  amount: number;
  minAmount: number;
  volume: number;
  minVolume: number;
  buyerSecurityDeposit: number;
  triggerPrice: number;
  paymentAccountId: string;
  paymentMethodId: string;
  paymentMethodShortName: string;
  baseCurrencyCode: string;
  counterCurrencyCode: string;
  date: number;
  state: string;
  sellerSecurityDeposit: number;
  offerFeePaymentTxId: string;
  txFee: number;
  makerFee: number;
  isActivated: boolean;
  isMyOffer: boolean;
  ownerNodeAddress: string;
  pubKeyRing: string;
  versionNr: string;
  protocolVersion: number;
}
