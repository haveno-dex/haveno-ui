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

import { Box, createStyles } from "@mantine/core";
import type { DefaultProps } from "@mantine/core";

export interface CircleIconProps extends DefaultProps {
  color?: string;
  size?: string;
  children: React.ReactNode;
}

type CircleIconStyle = Pick<CircleIconProps, "color" | "size">;

export function CircleIcon({
  children,
  classNames,
  className,
  color,
  size,
  ...otherProps
}: CircleIconProps) {
  const { classes, cx } = useStyles(
    { color, size },
    {
      name: "CircleIcon",
      classNames,
    }
  );

  return (
    <Box className={cx(classes.root, className)} {...otherProps}>
      {children}
    </Box>
  );
}

const useStyles = createStyles((theme, { color, size }: CircleIconStyle) => ({
  root: {
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    color: color || theme.colors.gray[9],
    display: "flex",
    height: size || 34,
    lineHeight: 1,
    width: size || 34,

    svg: {
      margin: "auto",
    },
  },
}));
