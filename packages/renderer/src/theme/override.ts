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
  colors: {
    brand: [
      "#dff2ff",
      "#b2caff",
      "#b2d4ff",
      "#83b8fc",
      "#539bf7",
      "#257ff4",
      "#0b65da",
      "#034fab",
      "#00387b",
      "#00224d",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#ececec",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#111111",
    ],
    success: [
      "#e8f9eb",
      "#cbe5cd",
      "#abd3af",
      "#8bc08f",
      "#6bad6d",
      "#529458",
      "#3e7347",
      "#2b5234",
      "#173220",
      "#011207",
    ],
  },
  primaryColor: "brand",
};
