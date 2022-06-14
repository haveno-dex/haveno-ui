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

import type { ButtonProps as MButtonProps, ButtonVariant } from "@mantine/core";
import { Button, Box, createStyles } from "@mantine/core";

export interface ButtonProps extends MButtonProps<"button"> {
  active?: boolean;
  bubbleText?: string;
}

interface MarketOffersFilterButtonStyleProps {
  active: boolean;
  variant: ButtonVariant;
}

export function MarketOffersFilterButton(props: ButtonProps) {
  const {
    bubbleText,
    className,
    active,
    variant = "outline",
    classNames,
    ...others
  } = props;

  const { cx, classes } = useStyles(
    {
      active: active || false,
      variant: variant,
    },
    {
      name: "MarketOffersFilterButton",
      classNames,
    }
  );

  return (
    <Button
      color="gray"
      radius="md"
      size="md"
      variant={variant}
      {...others}
      className={cx(
        classes.root,
        {
          [classes.outline]: variant === "outline",
        },
        className
      )}
    >
      {bubbleText && <Box className={classes.bubbleText}>{bubbleText}</Box>}
      {props.children}
    </Button>
  );
}

const useStyles = createStyles(
  (theme, { active }: MarketOffersFilterButtonStyleProps) => ({
    root: {
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
      position: "relative",
    },
    outline: {
      borderColor: active ? "#111" : "#E8E7EC",
      borderWidth: active ? 2 : 1,
      color: "#111",
    },
    bubbleText: {
      backgroundColor: "#111",
      borderRadius: 15,
      boxShadow: "0 0 0 2px #fff",
      color: "#fff",
      position: "absolute",
      padding: "2px 4px",
      top: -5,
      right: -5,
      fontSize: 10,
      lineHeight: 1,
      minWidth: 15,
    },
  })
);
