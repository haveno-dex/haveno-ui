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
import { QueryKeys } from "@constants/query-keys";
import { useHavenoClient } from "./useHavenoClient";

interface MyOfferesQuery {
  assetCode: string;
  direction?: "buy" | "sell";
}

export function useMarketsOffers(query: MyOfferesQuery) {
  const client = useHavenoClient();

  return useQuery<OfferInfo[], Error>([QueryKeys.MyOffers, query], () =>
    client.getMyOffers(query.assetCode, query.direction)
  );
}