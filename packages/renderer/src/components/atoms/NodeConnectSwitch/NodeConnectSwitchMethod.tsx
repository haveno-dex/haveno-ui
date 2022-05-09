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

import { LangKeys } from "@constants/lang";
import { Box } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { useControlStyles } from "./NodeConnectSwitch.style";

interface SettingTabProps {
  active?: boolean;
  current?: boolean;
  className?: string;
  icon?: React.ReactNode;
  label: string | React.ReactNode;
  tabKey: string;
  children: React.ReactNode;
}

export function NodeConnectSwitchMethod({
  active,
  current,
  label,
  icon,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tabKey,
  ...rest
}: SettingTabProps) {
  const { classes, cx } = useControlStyles({
    active: active || false,
    current: current || false,
  });

  return (
    <Box
      component="button"
      tabIndex={active ? 0 : -1}
      className={cx(
        classes.tabControl,
        { [classes.tabActive]: active },
        className
      )}
      type="button"
      role="tab"
      {...rest}
    >
      <Box className={classes.tabInner}>
        {current && (
          <Box className={cx(classes.tabCurrent)}>
            <FormattedMessage
              id={LangKeys.AccountSettingsCurrent}
              defaultMessage="Current"
            />
          </Box>
        )}
        {icon && <Box className={classes.tabIcon}>{icon}</Box>}
        {label && <Box className={classes.tabLabel}>{label}</Box>}
      </Box>
    </Box>
  );
}
