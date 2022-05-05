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

import type { TextInputProps as MTextInputProps } from "@mantine/core";
import { createStyles, TextInput as MTextInput } from "@mantine/core";

interface TextInputProps extends MTextInputProps {
  id: string;
}

export function TextInput(props: TextInputProps) {
  const { id, ...rest } = props;
  const { classes } = useStyles();
  return <MTextInput classNames={classes} id={id} {...rest} />;
}

const useStyles = createStyles((theme) => ({
  label: {
    fontSize: "0.875rem",
    fontWeight: 600,
    marginBottom: theme.spacing.sm,
  },
  input: {
    fontSize: "0.875rem",
    fontWeight: 700,
    height: "3rem",
    padding: "1rem",
  },
}));
