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

import type { MantineThemeOverride } from "@mantine/core";

export const themeOverride: MantineThemeOverride = {
  fontFamily: "Inter",
  headings: {
    fontFamily: "Inter",
  },
  other: {
    buttonHeight: 48,
  },
  colors: {
    blue: [
      "#E7F1FE",
      "#BBD7FC",
      "#8FBDF9",
      "#64A4F7",
      "#388AF5",
      "#0C70F3",
      "#0b65da",
      "#074392",
      "#052D61",
      "#021631",
    ],
    gray: [
      "#fcfcfc",
      "#f1f3f5",
      "#ececec",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#888888",
      "#515151",
      "#343a40",
      "#111111",
    ],
    green: [
      "#EFF6EF",
      "#D1E6D2",
      "#B3D5B4",
      "#96C597",
      "#75B377",
      "#5BA45D",
      "#48844A",
      "#366338",
      "#244225",
      "#122113",
    ],
    red: [
      "#FBECE9",
      "#F5C9C2",
      "#EEA69A",
      "#E88373",
      "#E2634E",
      "#DB3E24",
      "#AF321D",
      "#832516",
      "#58190E",
      "#2C0C07",
    ],
  },
};
