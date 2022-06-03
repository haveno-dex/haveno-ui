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

import { MantineProvider, Global } from "@mantine/core";
import type { FC } from "react";
import { themeOverride, globalStyles } from "@src/theme";

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MantineProvider theme={themeOverride}>
      <Global styles={globalStyles} />
      {children}
    </MantineProvider>
  );
};
