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

import type { DefaultProps } from "@mantine/core";
import { Stack, createStyles, Text } from "@mantine/core";
import { BodyText } from "@atoms/Typography";
export interface DetailItemProps extends DefaultProps {
  label?: string;
  textAlign?: "left" | "right";
  children: React.ReactNode | string;
}

type DetailItemStyleProps = Pick<DetailItemProps, "textAlign">;

export function DetailItem({
  label,
  children,
  classNames,
  className,
  textAlign,
  ...other
}: DetailItemProps) {
  const { classes, cx } = useStyles(
    { textAlign },
    { name: "DetailItem", classNames }
  );

  return (
    <Stack spacing={0} className={cx(classes.root, className)} {...other}>
      {label && <Text className={classes.label}>{label}</Text>}
      <BodyText heavy className={classes.content}>
        {children}
      </BodyText>
    </Stack>
  );
}

const useStyles = createStyles(
  (theme, { textAlign }: DetailItemStyleProps) => ({
    root: {
      textAlign: textAlign || undefined,
    },
    label: {
      color: theme.colors.gray[6],
      fontSize: theme.fontSizes.sm,
      fontWeight: 600,
      letterSpacing: "0.075rem",
      textTransform: "uppercase",
    },
    content: {
      fontWeight: 500,
    },
  })
);
