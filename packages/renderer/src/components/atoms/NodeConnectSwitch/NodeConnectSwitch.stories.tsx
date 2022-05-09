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

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { NodeConnectSwitch } from ".";
import { ReactComponent as CloudIcon } from "@assets/setting-cloud.svg";
import { ReactComponent as ServerIcon } from "@assets/setting-server.svg";

export default {
  title: "atoms/NodeConnectSwitch",
  component: NodeConnectSwitch,
} as ComponentMeta<typeof NodeConnectSwitch>;

const Template: ComponentStory<typeof NodeConnectSwitch> = () => {
  return (
    <NodeConnectSwitch>
      <NodeConnectSwitch.Method
        active={true}
        current={true}
        tabKey="local-node"
        label="Local Node"
        icon={<ServerIcon width="32px" height="62px" />}
      >
        Local Node
      </NodeConnectSwitch.Method>

      <NodeConnectSwitch.Method
        tabKey="remote-node"
        label="Remote Node"
        icon={<CloudIcon width="58px" height="54px" />}
      >
        Remote Node
      </NodeConnectSwitch.Method>
    </NodeConnectSwitch>
  );
};

export const Default = Template.bind({});
Default.args = {};
