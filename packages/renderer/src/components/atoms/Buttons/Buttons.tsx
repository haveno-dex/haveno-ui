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

import type { ButtonProps as MButtonProps } from "@mantine/core";
import { Button as MButton, createStyles } from "@mantine/core";

type ButtonProps<TComponent> = MButtonProps<TComponent> & {
  flavor?: "primary" | "neutral" | "success" | "danger";
};

export function Button<TComponent = "button">(props: ButtonProps<TComponent>) {
  const { children, flavor = "primary", ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <MButton
      className={cx(
        classes.common,
        { [classes.neutral]: flavor === "neutral" },
        { [classes.success]: flavor === "success" },
        { [classes.danger]: flavor === "danger" }
      )}
      {...rest}
    >
      {children}
    </MButton>
  );
}

const useStyles = createStyles((theme) => ({
  common: {
    borderRadius: 10,
    fontWeight: 600,
    height: 48,
    padding: "1rem",
  },
  neutral: {
    backgroundColor: theme.colors.gray[2],
    color: theme.colors.gray[9],
    "&:hover": {
      backgroundColor: theme.colors.gray[3],
    },
  },
  success: {
    backgroundColor: theme.colors.green[7],
    "&:hover": {
      backgroundColor: theme.colors.green[8],
    },
  },
  danger: {
    backgroundColor: theme.colors.red[6],
    "&:hover": {
      backgroundColor: theme.colors.red[7],
    },
  },
}));
