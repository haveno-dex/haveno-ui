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

import { FormattedMessage } from "react-intl";
import { Title } from "@mantine/core";
import type { ReactText } from "react";
import type { TitleProps } from "@mantine/core";
import type { LangKeys } from "@constants/lang";

interface HeadingProps extends TitleProps {
  children: ReactText;
  stringId?: LangKeys;
}

export function Heading(props: HeadingProps) {
  const { children, stringId, ...rest } = props;

  return (
    <Title {...rest}>
      {stringId ? (
        <FormattedMessage id={stringId} defaultMessage={children.toString()} />
      ) : (
        children
      )}
    </Title>
  );
}
