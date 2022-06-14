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
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "../Table";
import { CheckboxCell } from "./CheckboxCell";

export default {
  title: "atoms/Table/CheckboxCell",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  return (
    <Table
      table={table}
      columns={columns}
      data={args.data}
      onEditableDataChange={(values) => {
        console.log(values);
      }}
    />
  );
};

export const Default = Template.bind({});

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

const table = createTable().setRowType<Person>().setTableMetaType<{
  updateData: (rowIndex: number, columnId: string, value: unknown) => void;
}>();

const columns = [
  table.createGroup({
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      table.createDataColumn("firstName", {
        cell: (params) => <CheckboxCell {...params} />,
        footer: (props) => props.column.id,
      }),
      table.createDataColumn((row) => row.lastName, {
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      }),
    ],
  }),
  table.createGroup({
    header: "Info",
    footer: (props) => props.column.id,
    columns: [
      table.createDataColumn("age", {
        header: () => "Age",
        footer: (props) => props.column.id,
      }),
      table.createGroup({
        header: "More Info",
        columns: [
          table.createDataColumn("visits", {
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          }),
          table.createDataColumn("status", {
            header: "Status",
            footer: (props) => props.column.id,
          }),
          table.createDataColumn("progress", {
            header: "Profile Progress",
            footer: (props) => props.column.id,
          }),
        ],
      }),
    ],
  }),
];

Default.args = {
  data: [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
  ] as Array<Person>,
};
