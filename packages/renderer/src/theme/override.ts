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
  fontFamily: "Inter, sans-serif",
  fontSizes: {
    xl: 18,
    lg: 16,
    md: 14,
    sm: 12,
    xs: 10,
  },
  headings: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    sizes: {
      h1: {
        fontSize: "2.25rem",
        lineHeight: 1.25,
      },
      h2: {
        fontSize: "1.25rem",
        lineHeight: 1.25,
      },
      h3: {
        fontSize: "1.125rem",
        lineHeight: 1.25,
      },
      h4: {
        fontSize: "0.875rem",
        lineHeight: 1.25,
      },
      h5: {
        fontSize: "0.75rem",
        lineHeight: 1.25,
      },
    },
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
      "#E8E7EC",
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
    white: [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
    ],
  },
};
