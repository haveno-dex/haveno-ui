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

import { createStyles, Tabs } from "@mantine/core";

interface ToggleButtonProps {
  labels: Array<string>;
  onChange?: (selectedIndex: number) => void;
  active?: number;
}

export function ToggleButton({ labels, onChange, active }: ToggleButtonProps) {
  const { classes } = useStyles();

  const handleChange = (tabIndex: number) => {
    onChange && onChange(tabIndex);
  };
  return (
    <Tabs
      variant="unstyled"
      classNames={classes}
      active={active}
      onTabChange={handleChange}
    >
      {labels.map((label, index) => (
        <Tabs.Tab key={index} label={label} />
      ))}
    </Tabs>
  );
}

const useStyles = createStyles((theme) => ({
  tabControl: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: `0 solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,

    "&:not(:first-of-type)": {
      borderLeft: 0,
    },
    "&:first-of-type": {
      borderTopLeftRadius: theme.radius.md,
      borderBottomLeftRadius: theme.radius.md,
      borderLeftWidth: 1,
    },
    "&:last-of-type": {
      borderTopRightRadius: theme.radius.md,
      borderBottomRightRadius: theme.radius.md,
      borderRightWidth: 1,
    },
  },
  tabActive: {
    color: theme.white,
    position: "relative",

    "&:before": {
      backgroundColor: theme.colors.blue[6],
      borderRadius: theme.radius.md,
      bottom: -1,
      content: `""`,
      left: -1,
      position: "absolute",
      right: -1,
      top: -1,
    },
  },
  tabInner: {
    position: "relative",
    zIndex: 1,
  },
}));
