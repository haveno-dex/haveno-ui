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
import { CircleIcon } from "./CircleIcon";
import { ReactComponent as ArrowNorth } from "@assets/arrow-north.svg";

describe("atoms::CircleIcon", () => {
  it("renders without exploding", () => {
    const { asFragment } = render(
      <CircleIcon color="#0B65DA">
        <ArrowNorth />
      </CircleIcon>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
