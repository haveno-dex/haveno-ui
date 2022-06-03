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

import { createStyles, Group } from "@mantine/core";
import { DetailItem } from "@atoms/DetailItem";
import type { DetailItemProps } from "@atoms/DetailItem";

export interface DetailItemCardProps extends DetailItemProps {
  primary?: boolean;
}

interface DetailItemCardStyleProps {
  primary?: boolean;
}

const useStyles = createStyles(
  (theme, { primary }: DetailItemCardStyleProps) => ({
    root: {
      background: primary ? theme.colors.gray[2] : theme.white,
      borderRadius: theme.radius.md,
      border: `1px solid ${
        primary ? theme.colors.gray[2] : theme.colors.gray[3]
      }`,
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
    detailRoot: {
      width: "100%",
    },
  })
);

export function DetailItemCard({
  label,
  primary,
  children,
}: DetailItemCardProps) {
  const { classes } = useStyles({ primary });

  return (
    <Group className={classes.root}>
      <DetailItem label={label} classNames={{ root: classes.detailRoot }}>
        {children}
      </DetailItem>
    </Group>
  );
}
