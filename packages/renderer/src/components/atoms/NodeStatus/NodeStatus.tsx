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

import { Box, createStyles, Text } from "@mantine/core";

export enum NodeStatusType {
  Active = "active",
  Inactive = "inactive",
}
export interface NodeStatusProps {
  /** Node title */
  title: string;

  /** Node status */
  status: NodeStatusType;
}

export function NodeStatus({ title, status }: NodeStatusProps) {
  const { classes } = useStyles({ status });

  return (
    <Box className={classes.root}>
      <Text className={classes.title}>{title}</Text>
      <div className={classes.status}>
        <div className={classes.statusInner} />
      </div>
    </Box>
  );
}

export const useStyles = createStyles<string, { status: NodeStatusType }>(
  (theme, { status }) => {
    return {
      root: {
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        border: `1px solid ${theme.colors.gray[2]}`,
        borderRadius: theme.radius.md,
        padding: "0.91rem",
        display: "flex",
        transition: "background-color 0.1s ease-in-out",
      },
      title: {
        fontWeight: 600,
        fontSize: theme.fontSizes.sm,
        lineHeight: 1,
        width: "100%",
      },
      status: {
        display: "flex",
      },
      statusInner: {
        height: "0.625rem",
        width: "0.625rem",
        borderRadius: "0.625rem",
        background:
          status === NodeStatusType.Active
            ? theme.colors.green[4]
            : theme.colors.gray[4],
        margin: "auto",
      },
    };
  }
);
