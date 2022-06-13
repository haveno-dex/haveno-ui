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
import type { MarketOffer } from "./_types";
import {
  MarketOffersPriceCell,
  MarketOffersAmountCell,
  MarketOffersAccountTradesCell,
  MarketOffersCostsCell,
  MarketOffersAccountAgeCell,
  MarketOffersPaymentCell,
} from "./MarketOffersTableCell";
import { Table } from "@molecules/Table";
import { LangKeys } from "@constants/lang";
import { TableVariant } from "@molecules/Table/_types";

const table = createTable().setRowType<MarketOffer>();

interface MarketOffersTableProps {
  data: Array<MarketOffer>;
}

export function MarketOffersTable({ data }: MarketOffersTableProps) {
  const { classes } = useStyles();
  const columns = useMarketOffersColumns();

  return (
    <Table
      table={table}
      columns={columns}
      data={data}
      variant={TableVariant.Primary}
      state={{
        columnVisibility: {
          accountAge: false,
          accountTrades: false,
        },
      }}
      tableWrap={{
        verticalSpacing: "md",
        className: classes.root,
      }}
    />
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    "thead tr th, tbody tr td": {
      "&:first-of-type": {
        paddingLeft: 30,
      },
      "&:last-of-type": {
        paddingRight: 30,
      },
    },
    "tbody tr": {
      td: {
        background: theme.white,
        paddingTop: 22,
        paddingBottom: 22,
      },
      "&:last-of-type": {
        td: {
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
        },
      },
    },
  },
}));

const useMarketOffersColumns = () => {
  const { formatMessage } = useIntl();

  return [
    table.createDataColumn("price", {
      id: "price",
      header: formatMessage({
        id: LangKeys.MarketsOffersColumnPrice,
        defaultMessage: "Price",
      }),
      cell: ({ row }) => <MarketOffersPriceCell row={row.original} />,
      size: 400,
    }),
    table.createDataColumn("amount", {
      id: "amount",
      header: formatMessage({
        id: LangKeys.MarketsOffersColumnAmount,
        defaultMessage: "Amount",
      }),
      cell: ({ row }) => <MarketOffersAmountCell row={row.original} />,
      size: 400,
    }),
    table.createDataColumn("cost", {
      id: "costs",
      header: formatMessage({
        id: LangKeys.MarketsOffersColumnCost,
        defaultMessage: "Costs",
      }),
      cell: ({ row }) => <MarketOffersCostsCell row={row.original} />,
      size: 400,
    }),
    table.createDataColumn("paymentMethod", {
      id: "paymentMethod",
      header: formatMessage({
        id: LangKeys.MarketsOffersColumnPaymentMethod,
        defaultMessage: "Payment Method",
      }),
      cell: ({ row }) => <MarketOffersPaymentCell row={row.original} />,
      size: 400,
    }),
    table.createDataColumn("accountAge", {
      id: "accountAge",
      header: formatMessage({
        id: LangKeys.MarketsOffersColumnAccountAge,
        defaultMessage: "Account Age",
      }),
      cell: ({ row }) => <MarketOffersAccountAgeCell row={row.original} />,
      size: 400,
    }),
    table.createDataColumn("accountTrades", {
      id: "accountTrades",
      header: formatMessage({
        id: LangKeys.MarketsOffersColumnAccountTrades,
        defaultMessage: "Account Trades",
      }),
      cell: ({ row }) => <MarketOffersAccountTradesCell row={row.original} />,
      size: 400,
      meta: {
        textAlign: "right",
      },
    }),
  ];
};
