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

import { Text } from "@mantine/core";
import type { TMarketOfferPaymentMethod } from "./_types";
import { Currency } from "@atoms/Currency";

export function MarketOffersPaymentMethodsLimit({
  row,
}: {
  row?: TMarketOfferPaymentMethod;
}) {
  return (
    <Text size="sm" color="gray">
      <Currency value={row?.rateTradeLimit || 0} minimumFractionDigits={0} />{" "}
      {row?.rateTradeLimitCurrency}
    </Text>
  );
}

export function MarketOffersPaymentMethodsInfo({
  row,
}: {
  row?: TMarketOfferPaymentMethod;
}) {
  return (
    <Text size="sm" color="gray">
      {row?.info}
    </Text>
  );
}
