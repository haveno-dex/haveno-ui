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

import {
  useTableInstance,
  getCoreRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";
import { Table as MTable } from "@mantine/core";
import type { TableProps } from "./_types";
import { TableProvider } from "./use-table-context";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

export function Table(props: TableProps) {
  const { table, columns, data, tableWrap } = props;

  const tableInstance = useTableInstance(table, {
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <MTable {...tableWrap}>
      <TableProvider value={{ table: tableInstance, props }}>
        <TableHeader />
        <TableBody />
      </TableProvider>
    </MTable>
  );
}

Table.defaultProps = {
  showHeader: true,
  showFooter: true,
};
