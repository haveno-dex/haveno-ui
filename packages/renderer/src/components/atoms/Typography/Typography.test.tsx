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
import { BodyText, Heading, InfoText, LabelText } from ".";

describe("atoms::Typography", () => {
  describe("::BodyText", () => {
    it("renders without exploding", () => {
      const { asFragment } = render(<BodyText>body text</BodyText>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("renders heavy variant exploding", () => {
      const { asFragment } = render(<BodyText heavy>body text</BodyText>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("::Heading", () => {
    it("renders h1 by default", () => {
      const { asFragment } = render(<Heading>heading text</Heading>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("renders h2", () => {
      const { asFragment } = render(<Heading order={2}>heading text</Heading>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("::InfoText", () => {
    it("renders without exploding", () => {
      const { asFragment } = render(<InfoText>Info text</InfoText>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("::LabelText", () => {
    it("renders without exploding", () => {
      const { asFragment } = render(<LabelText>Label text</LabelText>);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
