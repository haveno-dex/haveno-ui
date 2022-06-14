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

import type { ReactNode } from "react";
import type { BoxProps } from "@mantine/core";
import { Box, createStyles } from "@mantine/core";

interface AmountChangeProps extends BoxProps<"div"> {
  children: ReactNode;
  positive?: boolean;
  negative?: boolean;
}

export function AmountChange(props: AmountChangeProps) {
  const { children, positive = false, negative = false } = props;
  const { classes } = useStyles({
    positive,
    negative,
  });
  return <Box className={classes.root}>{children}</Box>;
}

interface AmountChangeStyleProps {
  positive: boolean;
  negative: boolean;
}

const useStyles = createStyles(
  (theme, { positive, negative }: AmountChangeStyleProps) => ({
    root: {
      color: negative
        ? theme.colors.red[6]
        : positive
        ? theme.colors.green[6]
        : undefined,
    },
  })
);
