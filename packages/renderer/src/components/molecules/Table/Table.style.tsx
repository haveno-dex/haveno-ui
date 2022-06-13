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

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  primary: {
    "thead tr": {
      backgroundColor: theme.colors.gray[0],

      th: {
        borderBottomColor: theme.colors.gray[2],
        color: theme.colors.gray[5],
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      },
    },
    "tbody tr": {
      td: {
        borderBottomColor: theme.colors.gray[2],
      },
    },
  },
}));
