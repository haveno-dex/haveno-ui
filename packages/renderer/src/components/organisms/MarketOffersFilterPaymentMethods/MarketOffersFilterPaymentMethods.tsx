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

import { includes } from "lodash";
import type { FC } from "react";
import { useMemo } from "react";
import type { TMarketOfferPaymentMethod } from "@organisms/MarketOffersPaymentMethodsTable";
import { MarketOffersPaymentMethodsTable } from "@organisms/MarketOffersPaymentMethodsTable";
import { useOffersFilterState } from "@src/state/offersFilter";
import { usePaymentMethods } from "@hooks/haveno/usePaymentMethods";

export function MarketOffersFilterPaymentMethodsLoaded() {
  const { data: paymentMethods } = usePaymentMethods();
  const [filter, setFilter] = useOffersFilterState();

  const tableData = useMemo(
    () =>
      paymentMethods?.map((item) => ({
        ...item,
        methodChecked: includes(filter.paymentMethods, item.methodKey),
      })),
    [paymentMethods]
  );

  const handleEditableDataChange = (
    newData: Array<TMarketOfferPaymentMethod>
  ) => {
    setFilter((oldQuery) => ({
      ...oldQuery,
      paymentMethods: newData
        .filter((payment) => payment.methodChecked)
        .map((payment) => payment.methodKey),
    }));
  };
  if (!tableData) {
    return null;
  }
  return (
    <MarketOffersPaymentMethodsTable
      data={tableData}
      onEditableDataChange={handleEditableDataChange}
    />
  );
}

const MarketOffersFilterPaymentMethodsBoot: FC = ({ children }) => {
  const { isLoading } = usePaymentMethods();

  return isLoading ? <>Loading</> : <>{children}</>;
};

export function MarketOffersFilterPaymentMethods() {
  return (
    <MarketOffersFilterPaymentMethodsBoot>
      <MarketOffersFilterPaymentMethodsLoaded />
    </MarketOffersFilterPaymentMethodsBoot>
  );
}
