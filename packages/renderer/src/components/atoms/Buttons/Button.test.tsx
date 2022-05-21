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
import { Button, TextButton } from ".";

describe("atoms::Buttons", () => {
  it("renders primary button by default", () => {
    const { asFragment } = render(<Button>Primary</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders neutral button", () => {
    const { asFragment } = render(<Button flavor="neutral">Neutral</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders success button", () => {
    const { asFragment } = render(<Button flavor="success">Success</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error button", () => {
    const { asFragment } = render(<Button flavor="danger">Error</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders text button", () => {
    const { asFragment } = render(
      <TextButton>This is a Text Button</TextButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
