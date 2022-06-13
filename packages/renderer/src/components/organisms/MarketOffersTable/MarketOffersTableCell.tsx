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

import { Group, useMantineTheme } from "@mantine/core";
import type { MarketOffer } from "./_types";
import { Currency } from "@atoms/Currency";
import { BodyText } from "@atoms/Typography";
import { fractionToPercent } from "@src/utils/math";
import { ReactComponent as CheckCircle } from "@assets/check-circle.svg";

export function MarketOffersAccountAgeCell({ row }: { row?: MarketOffer }) {
  const theme = useMantineTheme();

  return (
    <Group spacing="sm">
      <CheckCircle color={theme.colors.blue[6]} width={15} height={15} />
      <BodyText heavy>{row?.accountAge} Days</BodyText>
    </Group>
  );
}

export function MarketOffersPriceCell({ row }: { row?: MarketOffer }) {
  return (
    <Group spacing="sm">
      <BodyText heavy>
        <Currency
          currencyCode={row?.priceCurrency}
          value={row?.price || 0}
          format="symbol"
        />
      </BodyText>

      <BodyText color="gray">
        <Currency
          value={fractionToPercent(row?.priceComparison || 0)}
          minimumFractionDigits={0}
        />
        %
      </BodyText>
    </Group>
  );
}

export function MarketOffersAmountCell({ row }: { row?: MarketOffer }) {
  return (
    <BodyText heavy>
      <Currency currencyCode={row?.amountCurrency} value={row?.amount || 0} />
    </BodyText>
  );
}

export function MarketOffersCostsCell({ row }: { row?: MarketOffer }) {
  return (
    <BodyText heavy>
      <Currency
        currencyCode={row?.costCurrency}
        value={row?.cost || 0}
        format="symbol"
      />
    </BodyText>
  );
}

export function MarketOffersAccountTradesCell({ row }: { row?: MarketOffer }) {
  return (
    <BodyText heavy>
      <Currency value={row?.accountTrades || 0} minimumFractionDigits={0} />
    </BodyText>
  );
}

export function MarketOffersPaymentCell({ row }: { row?: MarketOffer }) {
  return <BodyText heavy>{row?.paymentMethod}</BodyText>;
}
