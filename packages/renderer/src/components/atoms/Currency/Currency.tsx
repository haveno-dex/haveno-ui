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

import { useMemo } from "react";
import { useIntl } from "react-intl";

interface CurrencyProps {
  currencyCode?: string;
  value: number;
}

export function Currency(props: CurrencyProps) {
  const { currencyCode, value } = props;
  const intl = useIntl();

  const formattedNumber = useMemo(
    () =>
      intl.formatNumber(value, {
        ...(currencyCode
          ? {
              currency: currencyCode,
              currencyDisplay: "code",
              style: "currency",
            }
          : {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 12,
            }),
      }),
    [currencyCode, value]
  );

  return <>{formattedNumber}</>;
}
