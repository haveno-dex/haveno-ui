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

import { Stack } from "@mantine/core";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { MoneroNodeListItem, NodeStatus } from ".";

export default {
  title: "atoms/MoneroNodeListItem",
  component: MoneroNodeListItem,
} as ComponentMeta<typeof MoneroNodeListItem>;

const Template: ComponentStory<typeof MoneroNodeListItem> = () => {
  return (
    <Stack>
      <MoneroNodeListItem
        isSelected={true}
        title="node.moneroworldcom:18089"
        status={NodeStatus.Active}
        onClick={() => console.log("clicked")}
      />
      <MoneroNodeListItem
        isSelected={false}
        title="node.xmr.pt:18081"
        status={NodeStatus.Inactive}
        onClick={() => console.log("clicked")}
      />
      <MoneroNodeListItem
        isSelected={false}
        title="node.monero.net:18081"
        status={NodeStatus.Active}
        onClick={() => console.log("clicked")}
      />
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {};
