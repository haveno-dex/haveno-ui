import { Currency } from "@atoms/Currency";
import { BodyText } from "@atoms/Typography";
import { Group, Text, ThemeIcon } from "@mantine/core";
import type { MarketTransaction } from "./_types";

export function MarketTransactionsAccountAgeCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  return (
    <Group>
      <ThemeIcon radius="xl" size="sm">
        X
      </ThemeIcon>
      <Text>65 Days</Text>
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
      <Text color="gray">-1%</Text>
    </Group>
  );
}

export function MarketTransactionsAmountCell({
  row,
}: {
  row?: MarketTransaction;
}) {
  return (
    <Currency currencyCode={row?.amountCurrency} value={row?.amount || 0} />
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
