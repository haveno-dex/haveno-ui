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

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnDef, Row, TableState } from "@tanstack/react-table";
import type { TableProps as MTableProps } from "@mantine/core";

export interface TableProps {
  columns: Array<ColumnDef<any>>;
  table: any;
  data: Array<any>;
  state?: Partial<TableState>;

  showHeader?: boolean;
  showFooter?: boolean;

  rowSubComponent?: ({ row }: { row: Row<any> }) => React.ReactNode;

  tableWrap?: MTableProps;
  variant?: TableVariant;
}

export enum TableVariant {
  Default = "Default",
  Primary = "Primary",
}
