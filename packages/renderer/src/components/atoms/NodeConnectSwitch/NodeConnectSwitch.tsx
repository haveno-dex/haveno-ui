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

import type { ReactElement, ReactNode } from "react";
import { cloneElement, Children } from "react";
import { Box } from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import { NodeConnectSwitchMethod } from "./NodeConnectSwitchMethod";
import { useTabsStyles } from "./NodeConnectSwitch.style";

interface NodeConnectSwitchProps {
  /** <Tab /> components only */
  children?: ReactNode;

  /** Key of active tab */
  active?: string;

  /** Key of current tab */
  current?: boolean;

  /** Called when tab control is clicked with tab index */
  onTabChange?(tabKey: string): void;

  /** Key of initial tab */
  initialTab?: string;

  /** Extra class name */
  className?: string;
}

export function NodeConnectSwitch({
  className,
  onTabChange,
  active,
  children,
  initialTab,
}: NodeConnectSwitchProps) {
  const { classes, cx } = useTabsStyles();

  const tabs = Children.toArray(children) as Array<ReactElement>;

  const [_activeTab, handleActiveTabChange] = useUncontrolled({
    value: active,
    defaultValue: initialTab,
    finalValue: "",
    rule: (value) => typeof value === "string",
    onChange: (tabKey: string) => {
      onTabChange && onTabChange(tabKey);
    },
  });

  const panes = tabs.map((tab, index) =>
    cloneElement(tab, {
      key: index,
      active: _activeTab === tab.props.tabKey,
      onClick: () => handleActiveTabChange(tab.props.tabKey),
    })
  );
  const content = tabs.find((tab) => tab.props.tabKey === _activeTab);

  return (
    <Box className={cx(classes.root, className)}>
      <div className={cx(classes.tabsListWrapper)}>{panes} </div>

      {content && (
        <div role="tabpanel" className={classes.body} key={_activeTab}>
          {content.props.children}
        </div>
      )}
    </Box>
  );
}

NodeConnectSwitch.Method = NodeConnectSwitchMethod;
