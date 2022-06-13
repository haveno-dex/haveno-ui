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

import type { FC } from "react";
import { useMemo } from "react";
import { Group, Loader } from "@mantine/core";
import { transformToMarketsOffers } from "./_utils";
import { useMarketsOffers } from "@hooks/haveno/useMarketsOffers";
import { MarketOffersTable } from "@organisms/MarketOffersTable";

export function MarketsOffersLoaded() {
  const { data } = useMarketsOffers({
    assetCode: "ETH",
    direction: "sell",
  });
  const tableData = useMemo(() => transformToMarketsOffers(data || []), [data]);

  if (!data) {
    return null;
  }
  return <MarketOffersTable data={tableData} />;
}

const MarketsOffersBoot: FC = ({ children }) => {
  const { isLoading: isOffersLoading } = useMarketsOffers({
    assetCode: "ETH",
    direction: "buy",
  });
  return isOffersLoading ? (
    <Group>
      <Loader color="gray" style={{ margin: "auto" }} />
    </Group>
  ) : (
    <>{children}</>
  );
};

export function MarketsOffers() {
  return (
    <MarketsOffersBoot>
      <MarketsOffersLoaded />
    </MarketsOffersBoot>
  );
}
