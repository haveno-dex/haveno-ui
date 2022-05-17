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

import type { ReactNode, ReactText } from "react";
import { FormattedMessage } from "react-intl";
import type { TextProps as MTextProps } from "@mantine/core";
import { Text as MText, createStyles } from "@mantine/core";
import type { LangKeys } from "@constants/lang";

type TextProps<TComponent> = MTextProps<TComponent> & {
  children: ReactText | ReactNode;
  stringId?: LangKeys;
};

type BodyTextProps<TComponent> = TextProps<TComponent> & {
  heavy?: boolean;
};

export function BodyText<TComponent = "p">(props: BodyTextProps<TComponent>) {
  const { children, className, heavy, size, stringId, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <MText
      {...rest}
      className={cx(className, {
        [classes.body]: !size || size === "md",
        [classes.bodyLg]: size === "lg",
        [classes.bodyHeavy]: Boolean(heavy),
      })}
      size={size}
    >
      {stringId ? (
        <FormattedMessage
          id={stringId}
          defaultMessage={children ? children.toString() : ""}
        />
      ) : (
        children
      )}
    </MText>
  );
}

export function InfoText<TComponent = "p">(props: TextProps<TComponent>) {
  const { children, className, stringId, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <MText {...rest} className={cx(className, classes.info)}>
      {stringId ? (
        <FormattedMessage
          id={stringId}
          defaultMessage={children ? children.toString() : ""}
        />
      ) : (
        children
      )}
    </MText>
  );
}

export function LabelText(props: TextProps<"label">) {
  const { children, className, stringId, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <MText component="label" {...rest} className={cx(className, classes.label)}>
      {stringId ? (
        <FormattedMessage
          id={stringId}
          defaultMessage={children ? children.toString() : ""}
        />
      ) : (
        children
      )}
    </MText>
  );
}

const useStyles = createStyles((theme) => ({
  info: {
    color: theme.colors.gray[6],
    fontSize: "0.875rem",
  },
  body: {
    fontSize: "0.8125rem",
  },
  bodyHeavy: {
    fontWeight: 500,
  },
  bodyLg: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  label: {},
}));
