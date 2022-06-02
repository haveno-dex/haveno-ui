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
} from "./MarketTransactionsCell";

const table = createTable().setRowType<MarketTransaction>();

const columns = [
  table.createDataColumn("price", {
    id: "price",
    header: "Price",
    cell: ({ row }) => <MarketTransactionsPriceCell row={row.original} />,
    size: 400,
  }),
  table.createDataColumn("amount", {
    id: "amount",
    header: "Amount",
    size: 400,
    cell: ({ row }) => <MarketTransactionsAmountCell row={row.original} />,
  }),
  table.createDataColumn("cost", {
    id: "costs",
    header: "Costs",
    size: 400,
    cell: ({ row }) => <MarketTransactionsCostsCell row={row.original} />,
  }),
  table.createDataColumn("paymentMethod", {
    id: "paymentMethod",
    header: "Payment Method",
    size: 400,
  }),
  table.createDataColumn("accountAge", {
    id: "accountAge",
    header: "Account Age",
    size: 400,
    cell: ({ row }) => <MarketTransactionsAccountAgeCell row={row.original} />,
  }),
  table.createDataColumn("accountTrades", {
    id: "accountTrades",
    header: "Account Trades",
    size: 400,
    cell: ({ row }) => (
      <MarketTransactionsAccountTradesCell row={row.original} />
    ),
  }),
];

interface MarketTransactionsProps {
  data: MarketTransaction[];
}

export function MarketTransactions({ data }: MarketTransactionsProps) {
  const { classes, cx } = useStyles();

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
      color: "#B7B6BD",

      th: {
        fontSize: 10,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        borderBottomColor: "#E8E7EC",
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
