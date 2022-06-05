import { createStyles } from "@mantine/core";
import { createTable } from "@tanstack/react-table";
import { Table } from "@molecules/Table";
import type { MarketTransaction } from "./_types";
import {
  MarketTransactionsPriceCell,
  MarketTransactionsAmountCell,
  MarketTransactionsAccountTradesCell,
  MarketTransactionsCostsCell,
  MarketTransactionsAccountAgeCell,
  MarketTransactionsPaymentCell,
} from "./MarketTransactionsCell";
import { useIntl } from "react-intl";
import { LangKeys } from "@constants/lang";

const table = createTable().setRowType<MarketTransaction>();

interface MarketTransactionsProps {
  data: MarketTransaction[];
}

export function MarketTransactions({ data }: MarketTransactionsProps) {
  const { classes, cx } = useStyles();
  const columns = useMarketTransactionsColumns();

  return (
    <Table
      table={table}
      columns={columns}
      data={data}
      tableWrap={{
        verticalSpacing: "md",
        className: cx(classes.root),
      }}
    />
  );
}

const useStyles = createStyles(() => ({
  root: {
    "thead tr": {
      backgroundColor: "#F8F8F8",

      th: {
        fontSize: 10,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        borderBottomColor: "#E8E7EC",
        color: "#B7B6BD",
        fontWeight: 700,
      },
    },
    "tbody tr": {
      td: {
        paddingTop: 22,
        paddingBottom: 22,
        borderBottomColor: "#E8E7EC",
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