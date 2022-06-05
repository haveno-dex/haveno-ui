import { createTable } from "@tanstack/react-table";
import { createStyles } from "@mantine/core";
import { Table } from "@molecules/Table";

const table = createTable().setRowType<TMarketOffersTradingPair>();

interface MarketOffersTradingPairTableProps {
  data: TMarketOffersTradingPair[];
}

export function MarketOffersTradingPairTable({
  data,
}: MarketOffersTradingPairTableProps) {
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
  table.createDataColumn("fromPair", {
    id: "pair",
    header: "Pair",
  }),
  table.createDataColumn("lastPrice", {
    id: "lastPrice",
    header: "Last Price",
    size: 400,
  }),
  table.createDataColumn("dayChangeRate", {
    id: "lastPrice",
    header: "24th Change",
    size: 400,
  }),
  table.createDataColumn("dayChangeVolume", {
    id: "lastPrice",
    header: "24h Vol",
    size: 400,
  }),
];

export interface TMarketOffersTradingPair {
  fromPair: string;
  toPair: string;
  lastPrice: number;
  lastPriceCurrency: number;
  dayChangeRate: number;
  dayChangeVolume: number;
}

const useStyles = createStyles((theme) => ({
  root: {},
}));
