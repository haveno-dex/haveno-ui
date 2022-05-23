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

import { createStyles, Box, Text, UnstyledButton } from "@mantine/core";

export enum NodeStatus {
  Active = "active",
  Inactive = "inactive",
}

export interface MoneroNodeListItemProps {
  isSelected?: boolean;
  onClick: () => void;
  status: NodeStatus;
  title: string;
}

export function MoneroNodeListItem(props: MoneroNodeListItemProps) {
  const { isSelected = false, onClick, status, title } = props;
  const { classes } = useStyles({ isSelected, status });

  return (
    <UnstyledButton className={classes.root} onClick={onClick}>
      <Text className={classes.title}>{title}</Text>
      <Box className={classes.status}>
        <Box className={classes.statusInner} />
      </Box>
    </UnstyledButton>
  );
}

export const useStyles = createStyles<
  string,
  { isSelected: boolean; status: NodeStatus }
>((theme, { isSelected, status }) => {
  return {
    root: {
      backgroundColor: isSelected
        ? theme.colors.blue[0]
        : theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.white,
      border: `1px solid ${theme.colors.gray[2]}`,
      borderRadius: theme.radius.md,
      padding: "0.875rem",
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
        status === NodeStatus.Active
          ? theme.colors.green[4]
          : theme.colors.gray[4],
      margin: "auto",
    },
  };
});
