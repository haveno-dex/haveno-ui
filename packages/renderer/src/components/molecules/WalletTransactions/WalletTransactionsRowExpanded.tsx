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
import { Box, createStyles, Grid } from "@mantine/core";
import type { Row } from "@tanstack/react-table";
import { DetailItem } from "@atoms/DetailItem";
import { LangKeys } from "@constants/lang";
import { Currency } from "@atoms/Currency";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WalletTransactionRowExpanded({ row }: { row: Row<any> }) {
  const { formatMessage } = useIntl();
  const { classes } = useRowExpanded();

  return (
    <Box className={classes.root}>
      <Grid>
        <Grid.Col span={9}>
          <DetailItem
            label={formatMessage({
              id: LangKeys.WalletDetailTransactionId,
              defaultMessage: "Transaction ID",
            })}
            classNames={{
              label: classes.label,
              content: classes.detailContent,
            }}
            mb="lg"
          >
            {row.original.transactionId}
          </DetailItem>

          {row.original?.destinationAddresses?.map((address: string) => (
            <DetailItem
              key={address}
              label={formatMessage({
                id: LangKeys.WalletDetailDestinationAddress,
                defaultMessage: "Transaction Key",
              })}
              classNames={{
                label: classes.label,
                content: classes.detailContent,
              }}
              mb="lg"
            >
              {address}
            </DetailItem>
          ))}
          {row.original?.incomingAddresses?.map((address: string) => (
            <DetailItem
              key={address}
              label={formatMessage({
                id: LangKeys.WalletDetailIncomingAddress,
                defaultMessage: "Incoming Address",
              })}
              classNames={{
                label: classes.label,
                content: classes.detailContent,
              }}
              mb="lg"
            >
              {address}
            </DetailItem>
          ))}
        </Grid.Col>

        <Grid.Col span={3}>
          <DetailItem
            label={formatMessage({
              id: LangKeys.WalletDetailFee,
              defaultMessage: "Fee",
            })}
            ml="auto"
            textAlign="right"
            classNames={{
              label: classes.label,
              content: classes.detailContent,
            }}
            mb="lg"
          >
            <Currency value={row.original.fee} />
          </DetailItem>

          <DetailItem
            label={formatMessage({
              id: LangKeys.WalletDetailHeight,
              defaultMessage: "Height",
            })}
            ml="auto"
            textAlign="right"
            classNames={{
              label: classes.label,
              content: classes.detailContent,
            }}
            mb="lg"
          >
            <Currency value={row.original.height} />
          </DetailItem>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

const useRowExpanded = createStyles((theme) => ({
  root: {
    paddingLeft: 50,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
  label: {
    fontSize: 10,
  },
  detailContent: {
    wordBreak: "break-all",
  },
}));
