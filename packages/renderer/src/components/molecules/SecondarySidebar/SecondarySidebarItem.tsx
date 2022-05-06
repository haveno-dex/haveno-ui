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

import { UnstyledButton, Group, Text, createStyles } from "@mantine/core";

interface SecondarySidebarItemProps {
  isActive?: boolean;
  label: string;
}

/**
 * Secondary sidebar menu item.
 * @param   {SecondarySidebarItemProps}
 * @returns {JSX.Element}
 */
export function SecondarySidebarItem({
  isActive = false,
  label,
}: SecondarySidebarItemProps) {
  const { classes } = useStyles({ isActive });
  return (
    <UnstyledButton className={classes.button}>
      <Group className={classes.group}>
        <Text className={classes.text}>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const useStyles = createStyles<string, { isActive: boolean }>(
  (theme, { isActive }) => ({
    button: {
      padding: `${theme.spacing.lg}px 0`,
      color: isActive ? theme.colors.dark[9] : theme.colors.gray[6],
      transition: "color 0.1s ease-in-out",

      "&:hover": {
        color: theme.colors.dark[9],
      },
    },
    group: {
      position: "relative",
    },
    text: {
      textTransform: "uppercase",
      fontSize: theme.fontSizes.xs,
      fontWeight: 700,
      paddingLeft: isActive ? 20 : "0",

      "&:before": {
        content: '""',
        display: "inline-block",
        width: isActive ? "12px" : "0",
        height: 3,
        backgroundColor: theme.colors.blue[6],
        position: "absolute",
        top: "50%",
        marginTop: "-1.5px",
        left: 0,
        borderRadius: 3,
      },
    },
  })
);
