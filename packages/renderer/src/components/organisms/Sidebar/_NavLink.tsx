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
import { UnstyledButton, Group, Text, createStyles } from "@mantine/core";

interface NavLinkProps {
  icon: ReactNode;
  isActive?: boolean;
  label: string;
}

export function NavLink({ icon, isActive = false, label }: NavLinkProps) {
  const { classes } = useStyles({ isActive });
  return (
    <UnstyledButton className={classes.navLink}>
      <Group>
        {icon}
        <Text
          className={classes.text}
          color="gray"
          size="xs"
          transform="uppercase"
        >
          {label}
        </Text>
      </Group>
    </UnstyledButton>
  );
}

const useStyles = createStyles<string, { isActive: boolean }>(
  (theme, { isActive }, getRef) => ({
    navLink: {
      display: "block",
      padding: `${theme.spacing.lg}px ${theme.spacing.lg}px`,
      transition: "opacity 0.2s",
      width: "100%",

      [`svg, .${getRef("text")}`]: {
        opacity: isActive ? 1 : 0.5,
        transition: "opacity 0.2s",
      },

      svg: isActive
        ? {
            path: {
              fill: theme.colors.blue[6],
            },
          }
        : null,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],

        [`svg, .${getRef("text")}`]: {
          opacity: 1,
        },
      },
    },
    text: {
      ref: getRef("text"),
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.dark[8],
      fontSize: "0.6875rem",
      fontWeight: 700,
      transition: "opacity 0.2s",
    },
  })
);
