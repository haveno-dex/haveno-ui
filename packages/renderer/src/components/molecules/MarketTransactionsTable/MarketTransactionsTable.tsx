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

import { createStyles } from "@mantine/core";
import { createTable } from "@tanstack/react-table";
import { useIntl } from "react-intl";
import { Table } from "@molecules/Table";
import type { MarketTransaction } from "./_types";
import {
  MarketTransactionsPriceCell,
  MarketTransactionsAmountCell,
  MarketTransactionsAccountTradesCell,
  MarketTransactionsCostsCell,
  MarketTransactionsAccountAgeCell,
  MarketTransactionsPaymentCell,
} from "./MarketTransactionsTableCell";
import { LangKeys } from "@constants/lang";
import { TableVariant } from "@molecules/Table/_types";

const table = createTable().setRowType<MarketTransaction>();

interface MarketTransactionsTableProps {
  data: MarketTransaction[];
}

export function MarketTransactionsTable({
  data,
}: MarketTransactionsTableProps) {
  const { classes } = useStyles();
  const columns = useMarketTransactionsColumns();

  return (
    <Table
      table={table}
      columns={columns}
      data={data}
      variant={TableVariant.Primary}
      tableWrap={{
        verticalSpacing: "md",
        className: classes.root,
      }}
    />
  );
}

const useStyles = createStyles(() => ({
  root: {
    "tbody tr": {
      td: {
        paddingTop: 22,
        paddingBottom: 22,
      },
    },
  },
}));

const useMarketTransactionsColumns = () => {
  const { formatMessage } = useIntl();

  return [
    table.createDataColumn("price", {
      id: "price",
      header: formatMessage({
        id: LangKeys.MarketsTransactionsColumnPrice,
        defaultMessage: "Price",
      }),
      cell: ({ row }) => <MarketTransactionsPriceCell row={row.original} />,
      size: 400,
    }),
    table.createDataColumn("amount", {
      id: "amount",
      header: formatMessage({
        id: LangKeys.MarketsTransactionsColumnAmount,
        defaultMessage: "Amount",
      }),
      size: 400,
      cell: ({ row }) => <MarketTransactionsAmountCell row={row.original} />,
    }),
    table.createDataColumn("cost", {
      id: "costs",
      header: formatMessage({
        id: LangKeys.MarketsTransactionsColumnCost,
        defaultMessage: "Costs",
      }),
      size: 400,
      cell: ({ row }) => <MarketTransactionsCostsCell row={row.original} />,
    }),
    table.createDataColumn("paymentMethod", {
      id: "paymentMethod",
      header: formatMessage({
        id: LangKeys.MarketsTransactionsColumnPaymentMethod,
        defaultMessage: "Payment Method",
      }),
      size: 400,
      cell: ({ row }) => <MarketTransactionsPaymentCell row={row.original} />,
    }),
    table.createDataColumn("accountAge", {
      id: "accountAge",
      header: formatMessage({
        id: LangKeys.MarketsTransactionsColumnAccountAge,
        defaultMessage: "Account Age",
      }),
      size: 400,
      cell: ({ row }) => (
        <MarketTransactionsAccountAgeCell row={row.original} />
      ),
    }),
    table.createDataColumn("accountTrades", {
      id: "accountTrades",
      header: formatMessage({
        id: LangKeys.MarketsTransactionsColumnAccountTrades,
        defaultMessage: "Account Trades",
      }),
      size: 400,
      cell: ({ row }) => (
        <MarketTransactionsAccountTradesCell row={row.original} />
      ),
    }),
  ];
};
