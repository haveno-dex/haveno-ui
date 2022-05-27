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

import type { TabsProps as MTabsProps } from "@mantine/core";
import { Tabs as MTabs, Tab as MTab, createStyles } from "@mantine/core";

export function Tabs(props: MTabsProps) {
  const style = useStyles();

  return <MTabs classNames={style.classes} variant="unstyled" {...props} />;
}

Tabs.Tab = MTab;

const useStyles = createStyles((theme, _params, getRef) => {
  const tabActiveRef = getRef("tabActive");

  return {
    tabsList: {
      borderBottom: `2px solid ${theme.colors.gray[3]}`,
    },
    tabControl: {
      borderBottom: "2px solid transparent",
      color: theme.colors.gray[6],
      fontWeight: 700,
      height: 32,
      letterSpacing: 0.8,
      marginBottom: -2,
      marginLeft: theme.spacing.md,
      marginRight: theme.spacing.md,
      paddingLeft: 0,
      paddingRight: 0,
      textTransform: "uppercase",

      "&:first-child": {
        marginLeft: 0,
      },
      "&:last-child": {
        marginRight: 0,
      },
      [`&.${tabActiveRef}`]: {
        borderBottomColor: theme.primaryColor,
        color: theme.colors.dark[9],
      },
    },
  };
});
