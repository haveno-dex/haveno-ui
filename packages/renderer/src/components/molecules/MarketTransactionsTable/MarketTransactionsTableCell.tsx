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

import { useIntl } from "react-intl";
import { Group } from "@mantine/core";
import { Currency } from "@atoms/Currency";
import { BodyText } from "@atoms/Typography";
import type { MarketTransaction } from "./_types";
import { MarketTransactionPaymentMethod } from "./_types";
import { ReactComponent as CheckCircle } from "@assets/check-circle.svg";
import { LangKeys } from "@constants/lang";

export function MarketTransactionsAccountAgeCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  return (
    <Group spacing="sm">
      <CheckCircle width={15} height={15} />
      <BodyText heavy>65 Days</BodyText>
    </Group>
  );
}

export function MarketTransactionsPriceCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  return (
    <Group spacing="sm">
      <BodyText heavy>
        <Currency
          currencyCode={row?.priceCurrency}
          value={row?.price || 0}
          currentDisplay="symbol"
        />
      </BodyText>
      <BodyText color="gray">-1%</BodyText>
    </Group>
  );
}

export function MarketTransactionsAmountCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  return (
    <BodyText heavy>
      <Currency currencyCode={row?.amountCurrency} value={row?.amount || 0} />
    </BodyText>
  );
}

export function MarketTransactionsCostsCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  return (
    <BodyText heavy>
      <Currency
        currencyCode={row?.costCurrency}
        value={row?.cost || 0}
        currentDisplay="symbol"
      />
    </BodyText>
  );
}

export function MarketTransactionsAccountTradesCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  return (
    <BodyText heavy>
      <Currency value={row?.accountTrades || 0} minimumFractionDigits={0} />
    </BodyText>
  );
}

export function MarketTransactionsPaymentCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  const { formatMessage } = useIntl();

  return (
    <BodyText heavy>
      {row?.paymentMethod === MarketTransactionPaymentMethod.CashByMail
        ? formatMessage({
            id: LangKeys.MarketsTransactionsCashByMail,
            defaultMessage: "Cash by mail",
          })
        : ""}
    </BodyText>
  );
}
