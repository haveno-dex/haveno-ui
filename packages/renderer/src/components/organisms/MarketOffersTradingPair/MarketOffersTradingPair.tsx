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

import { useCallback } from "react";
import type { FC } from "react";
import type { Row } from "@tanstack/react-table";
import type { TMarketTradingPairTable } from "@organisms/MarketOffersTradingPairTable";
import { MarketOffersTradingPairTable } from "@organisms/MarketOffersTradingPairTable";
import { useOffersFilterState } from "@src/state/offersFilter";
import { useMarketsPairs } from "@hooks/haveno/useMarketPairs";

interface MarketOffersTradingPairProps {
  onSubmit?: (row: Row<TMarketTradingPairTable>) => void;
}

export function MarketOffersTradingPair({
  onSubmit,
}: MarketOffersTradingPairProps) {
  return (
    <MarketOffersTradingPairBoot>
      <MarketOffersTradingPairLoaded onSubmit={onSubmit} />
    </MarketOffersTradingPairBoot>
  );
}

interface MarketOffersTradingPairLoadedProps {
  onSubmit?: (row: Row<TMarketTradingPairTable>) => void;
}

function MarketOffersTradingPairLoaded({
  onSubmit,
}: MarketOffersTradingPairLoadedProps) {
  const { data: marketsPairs } = useMarketsPairs();
  const [, setOffersState] = useOffersFilterState();

  const handleRowClick = useCallback(
    (row: Row<TMarketTradingPairTable>) => {
      // Sync the selected pair to atom global filter state.
      setOffersState((oldFilter) => ({
        ...oldFilter,
        assetCode: row.original?.fromPair || "",
      }));
      onSubmit && onSubmit(row);
    },
    [onSubmit]
  );

  if (!marketsPairs) {
    return null;
  }
  return (
    <MarketOffersTradingPairTable
      data={marketsPairs}
      onRowClick={handleRowClick}
    />
  );
}

const MarketOffersTradingPairBoot: FC = ({ children }) => {
  const { isLoading } = useMarketsPairs();

  return isLoading ? <>Loading</> : <>{children}</>;
};
