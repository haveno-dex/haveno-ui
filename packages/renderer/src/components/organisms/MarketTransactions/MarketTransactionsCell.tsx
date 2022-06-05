import { Currency } from "@atoms/Currency";
import { BodyText } from "@atoms/Typography";
import { Group, Text } from "@mantine/core";
import type { MarketTransaction } from "./_types";
import { MarketTransactionPaymentMethod } from "./_types";
import { ReactComponent as CheckCircle } from "@assets/check-circle.svg";
import { useIntl } from "react-intl";
import { LangKeys } from "@constants/lang";

export function MarketTransactionsAccountAgeCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  return (
    <Group>
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
    <Group>
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
      <Currency value={row?.accountTrades || 0} />
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
