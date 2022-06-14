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

import type { CSSObject } from "@emotion/react";
import InterFont from "@assets/fonts/Inter-Variable.ttf";

export const globalStyles: CSSObject = {
  "@font-face": {
    fontFamily: "Inter",
    src: `url('${InterFont}')`,
    fontWeight: "100 800",
    fontStyle: "normal italic",
  },
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  body: {
    margin: 0,
    padding: 0,
  },
  "#app": {
    display: "flex",
    minHeight: "100vh",
  },
};
