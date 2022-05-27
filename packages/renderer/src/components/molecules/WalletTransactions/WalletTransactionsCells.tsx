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

import { FormattedDate, FormattedTime, useIntl } from "react-intl";
import { Box, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { ReactComponent as ArrowNorth } from "@assets/arrow-north.svg";
import { ReactComponent as ArrowWest } from "@assets/arrow-west.svg";
import { LangKeys } from "@constants/lang";
import { Currency } from "@atoms/Currency";
import { CircleIcon } from "@atoms/CircleIcon/CircleIcon";
import type { TWalletTransaction } from "./_types";
import { WalletTransactionType } from "./_types";

export function WalletTransactionnSignCell({
  row,
}: {
  row?: TWalletTransaction;
}) {
  const { formatMessage } = useIntl();
  const theme = useMantineTheme();

  return (
    <Group>
      <CircleIcon>
        {WalletTransactionType.Sent === row?.type ? (
          <ArrowNorth color={theme.colors.blue[5]} width={18} height={18} />
        ) : (
          <ArrowWest color={theme.colors.green[4]} width={18} height={18} />
        )}
      </CircleIcon>

      <Box>
        <Text weight="bold">
          {row?.type === WalletTransactionType.Sent
            ? formatMessage({
                id: LangKeys.WalletDetailSent,
                defaultMessage: "Sent",
              })
            : formatMessage({
                id: LangKeys.WalletDetailReceived,
                defaultMessage: "Received",
              })}
        </Text>

        <Group spacing="xs">
          <Text size="sm" color="gray">
            <FormattedTime value={row?.timestamp} />
          </Text>

          <Text size="sm" color="gray">
            <FormattedDate
              value={row?.timestamp}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </Text>
        </Group>
      </Box>
    </Group>
  );
}

export function WalletTransactionAmountCell({
  row,
}: {
  row?: TWalletTransaction;
}) {
  return (
    <Stack spacing={0} sx={{ textAlign: "right" }}>
      <Text weight="bold">
        <Currency value={row?.amount || 0} currencyCode={row?.amountCurrency} />
      </Text>

      {row?.foreignAmount && (
        <Text size="sm" color="gray">
          <Currency
            value={row?.foreignAmount}
            currencyCode={row?.foreignAmountCurrency}
          />
        </Text>
      )}
    </Stack>
  );
}
