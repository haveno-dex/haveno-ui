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
import { render } from "@testing-library/react";
import { MoneroNodeListItem, NodeStatus } from "./MoneroNodeListItem";
import { AppProviders } from "@atoms/AppProviders";

describe("atoms::MoneroNodeListItem", () => {
  it("renders without exploding", () => {
    const { asFragment } = render(
      <AppProviders>
        <MoneroNodeListItem
          isSelected={true}
          title="node.moneroworldcom:18089:active"
          status={NodeStatus.Active}
          onClick={() => console.log("clicked")}
        />
        <MoneroNodeListItem
          isSelected={false}
          title="node.moneroworldcom:18089:inactive"
          status={NodeStatus.Inactive}
          onClick={() => console.log("clicked")}
        />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
