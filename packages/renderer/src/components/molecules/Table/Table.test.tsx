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

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createTable } from "@tanstack/react-table";
import { Table } from "./Table";

describe("molecules::Table", () => {
  it("renders without exploding.", () => {
    const { asFragment, unmount } = render(
      <Table table={table} data={data} columns={columns} />
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders all columns.", () => {
    const { unmount } = render(
      <Table table={table} data={data} columns={columns} />
    );
    expect(screen.queryByText("Name")).toBeInTheDocument();
    expect(screen.queryByText("First Name")).toBeInTheDocument();
    expect(screen.queryByText("Last Name")).toBeInTheDocument();
    unmount();
  });

  it("shouldn't render columns if `showHeader` was true.", () => {
    const { unmount } = render(
      <Table table={table} data={data} columns={columns} showHeader={false} />
    );
    expect(screen.queryByText("Name")).not.toBeInTheDocument();
    expect(screen.queryByText("First Name")).not.toBeInTheDocument();
    expect(screen.queryByText("Last Name")).not.toBeInTheDocument();
    unmount();
  });

  it("renders all columns.", () => {
    const { unmount } = render(
      <Table table={table} data={data} columns={columns} />
    );
    expect(screen.queryByText("Ahmed")).toBeInTheDocument();
    expect(screen.queryByText("Subir")).toBeInTheDocument();
    expect(screen.queryByText("In Relationship")).not.toBeInTheDocument();
    unmount();
  });
});

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};
const table = createTable().setRowType<Person>();

const data: Array<Person> = [
  {
    firstName: "Ahmed",
    lastName: "Subir",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
];

const columns = [
  table.createGroup({
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      table.createDataColumn("firstName", {
        header: "First Name",
        footer: (props) => props.column.id,
      }),
      table.createDataColumn("lastName", {
        id: "lastName",
        header: "Last Name",
        footer: (props) => props.column.id,
      }),
    ],
  }),
];
