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

import { createTable } from "@tanstack/react-table";
import { createStyles } from "@mantine/core";
import { useIntl } from "react-intl";
import {
  MarketOffersPaymentMethodsInfo,
  MarketOffersPaymentMethodsLimit,
} from "./MarketOffersPaymentMethodsTableCells";
import type { TMarketOfferPaymentMethod } from "./_types";
import type { TableProps } from "@molecules/Table";
import { CheckboxCell, Table } from "@molecules/Table";
import { LangKeys } from "@constants/lang";

const table = createTable().setRowType<TMarketOfferPaymentMethod>();

interface MarketOffersPaymentMethodsTableProps extends Partial<TableProps> {
  data: Array<TMarketOfferPaymentMethod>;
}

export function MarketOffersPaymentMethodsTable({
  data,
  ...rest
}: MarketOffersPaymentMethodsTableProps) {
  const { classes } = useStyles();
  const columns = useMarketOffersPaymentMethodsColumns();

  return (
    <Table
      {...rest}
      table={table}
      columns={columns}
      data={data}
      tableWrap={{
        verticalSpacing: "xs",
        striped: true,
        className: classes.root,
      }}
    />
  );
}

const useMarketOffersPaymentMethodsColumns = () => {
  const { formatMessage } = useIntl();

  return [
    table.createDataColumn("methodChecked", {
      id: "methodChecked",
      header: " ",
      cell: (props) => (
        <CheckboxCell {...props} checkboxProps={{ radius: "xs", size: "sm" }} />
      ),
      size: 30,
    }),
    table.createDataColumn("methodName", {
      id: "methodName",
      header: formatMessage({
        id: LangKeys.MarketPaymentMethodColMethodName,
        defaultMessage: "Method",
      }),
      size: 300,
    }),
    table.createDataColumn("rateTradeLimit", {
      id: "rateTradeLimit",
      header: formatMessage({
        id: LangKeys.MarketPaymentMethodColRateTradeLimit,
        defaultMessage: "Rate Trade Limit",
      }),
      size: 400,
      cell: ({ row }) => (
        <MarketOffersPaymentMethodsLimit row={row?.original} />
      ),
    }),
    table.createDataColumn("info", {
      id: "info",
      header: formatMessage({
        id: LangKeys.MarketPaymentMethodColInfo,
        defaultMessage: "Info",
      }),
      size: 400,
      cell: ({ row }) => <MarketOffersPaymentMethodsInfo row={row?.original} />,
      meta: { textAlign: "right" },
    }),
  ];
};

const useStyles = createStyles((theme) => ({
  root: {
    thead: {
      tr: {
        th: {
          color: theme.colors.gray[9],
          fontSize: theme.fontSizes.xs,
          paddingBottom: 8,
          paddingTop: 8,
          textTransform: "uppercase",

          "&:first-of-type": {
            paddingLeft: theme.spacing.xl,
          },
          "&:last-of-type": {
            paddingRight: theme.spacing.xl,
          },
        },
      },
    },
    tbody: {
      tr: {
        td: {
          borderBottom: 0,
          fontSize: theme.fontSizes.md,

          "&:first-of-type": {
            paddingLeft: theme.spacing.xl,
          },
          "&:last-of-type": {
            paddingRight: theme.spacing.xl,
          },
        },
      },
    },
  },
}));
