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

import { Box, Group } from "@mantine/core";
import type { TMarketOffersTradingPair } from "./_types";
import { AmountChange } from "@atoms/AmountChange/AmountChange";
import { Currency } from "@atoms/Currency";

export function MarketOfferPairLastPriceCell({
  row,
}: {
  row?: TMarketOffersTradingPair;
}) {
  return (
    <Group spacing="md">
      <Box>{row?.lastPriceCurrency}</Box>
      <Box>
        <Currency value={row?.lastPrice || 0} minimumFractionDigits={0} />
      </Box>
    </Group>
  );
}

export function MarketOfferPair24thChange() {
  return <AmountChange positive={true}>+3,5%</AmountChange>;
}

export function MarketOfferPair24thChangeVolume({
  row,
}: {
  row?: TMarketOffersTradingPair;
}) {
  return (
    <Currency value={row?.dayChangeVolume || 0} minimumFractionDigits={0} />
  );
}
