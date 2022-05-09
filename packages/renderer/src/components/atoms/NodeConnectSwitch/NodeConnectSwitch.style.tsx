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

export const useTabsStyles = createStyles<string, void>(() => {
  return {
    root: {},
    tabsListWrapper: {
      display: "flex",
    },
    body: {
      marginTop: "2.5rem",
    },
  };
});

export const useControlStyles = createStyles<
  string,
  { active: boolean; current: boolean }
>((theme, { active }, getRef) => {
  const tabActive = { ref: getRef("tabActive") };

  return {
    tabControl: {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[9],
      border: `2px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2]
      }`,
      fontSize: theme.fontSizes.md,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      borderRadius: theme.radius.lg,
      height: "8.45rem",
      width: "13.85rem",

      "&:not(:first-of-type)": {
        marginLeft: theme.spacing.xl,
      },
      [`&.${tabActive.ref}`]: {
        color: theme.colorScheme === "dark" ? theme.black : theme.white,
      },
      cursor: "pointer",
      position: "relative",
    },
    tabIcon: {
      fill: "currentColor",
      minHeight: "3.8rem",
      display: "flex",

      svg: {
        margin: "auto",
      },
    },
    tabInner: {
      flexDirection: "column",
    },
    tabLabel: {
      fontWeight: 600,
      fontSize: theme.fontSizes.md,
      marginTop: "1rem",
    },
    tabActive: {
      backgroundColor: theme.colors.blue[6],
      borderColor: theme.colors.blue[6],
      color: theme.white,
    },
    tabCurrent: {
      display: "inline-block",
      position: "absolute",
      fontSize: theme.fontSizes.xs,
      lineHeight: 1,
      padding: "0.38rem 1.15rem",
      borderRadius: theme.radius.sm,
      top: "0.6rem",
      left: "0.7rem",
      background: active
        ? theme.fn.rgba(theme.white, 0.15)
        : theme.fn.rgba(theme.colors.blue[5], 0.15),
      color: active ? theme.white : theme.black,
    },
  };
});
