import { createTable } from "@tanstack/react-table";
import { createStyles } from "@mantine/core";
import { Table } from "@molecules/Table";

const table = createTable().setRowType<TMarketOfferPaymentMethod>();

interface MarketoffersSelectPaymentMethods {
  data: TMarketOfferPaymentMethod[];
}

export function MarketoffersSelectPaymentMethods({
  data,
}: MarketoffersSelectPaymentMethods) {
  const { classes } = useStyles();

  return (
    <Table
      table={table}
      columns={columns}
      data={data}
      tableWrap={{
        verticalSpacing: "xs",
      }}
    />
  );
}

const columns = [
  table.createDataColumn("method", {
    id: "method",
    header: "Method",
  }),
  table.createDataColumn("rateTradeLimit", {
    id: "rateTradeLimit",
    header: "Per Trade Limit",
    size: 400,
  }),
  table.createDataColumn("info", {
    id: "info",
    header: "Info",
    size: 400,
  })
];

export interface TMarketOfferPaymentMethod {
  method: string;
  rateTradeLimit: number;
  rateTradeLimitCurrency: string;
  info: string;
}

const useStyles = createStyles((theme) => ({
  root: {},
}));
