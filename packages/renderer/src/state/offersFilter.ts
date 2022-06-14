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

import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export type OfferFilter = {
  direction: string;
  assetCode: string;
  minimumCryptoAmount?: number | null;
  maximumCryptoAmount?: number | null;
  minimumBaseCurrencyAmount?: number | null;
  maximumBaseCurrencyAmount?: number | null;
  paymentMethods?: Array<string>;
  signedAccounts?: boolean;
  minimumAccountAge?: number | null;
  minimumTradesAmount?: number | null;
};
const defaultValue = {
  direction: "sell",
  assetCode: "BTC",
};
export const offersFilterAtom = atom<OfferFilter>({
  key: "offersFilter",
  default: defaultValue,
});

export const useGetOffersFilterState = () =>
  useRecoilValue<OfferFilter>(offersFilterAtom);

export const useSetOffersFilterState = () =>
  useSetRecoilState<OfferFilter>(offersFilterAtom);

export const useOffersFilterState = () =>
  useRecoilState<OfferFilter>(offersFilterAtom);
