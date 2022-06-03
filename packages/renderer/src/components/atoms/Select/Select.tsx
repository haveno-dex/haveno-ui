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

import { useState, useMemo } from "react";
import { createStyles, Select as MSelect } from "@mantine/core";
import type { SelectProps as MSelectProps } from "@mantine/core";
import { ReactComponent as ArrowIcon } from "@assets/arrow-down.svg";

interface SelectProps extends MSelectProps {
  id: string;
}

export function Select(props: SelectProps) {
  const { clearable, value, onChange } = props;
  const [isEmpty, setEmpty] = useState(!value);
  const showClearButton = useMemo(
    () => clearable === true && !isEmpty,
    [clearable, isEmpty]
  );
  const { classes } = useStyles({ showClearButton });

  const handleChange = (value: string) => {
    setEmpty(!value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <MSelect
      {...props}
      classNames={classes}
      onChange={handleChange}
      rightSection={
        showClearButton ? undefined : (
          <ArrowIcon className={classes.arrowIcon} />
        )
      }
      withinPortal={false}
    />
  );
}

const useStyles = createStyles<string, { showClearButton: boolean }>(
  (theme, params) => ({
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
    item: {
      fontSize: "0.875rem",
      fontWeight: 500,
      padding: "1rem",
    },
    ...(params.showClearButton
      ? null
      : {
          rightSection: { pointerEvents: "none" },
        }),
    arrowIcon: {
      width: "0.5rem",
    },
  })
);
