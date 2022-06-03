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
import { TextInput } from ".";
import { ReactComponent as BtcIcon } from "@assets/btc.svg";

export default {
  title: "atoms/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = () => {
  return (
    <Stack>
      <TextInput id="name" placeholder="Your name" label="Full name" required />
      <TextInput id="btc" label="Bitcoin" icon={<BtcIcon />} />
    </Stack>
  );
};

export const Default = Template.bind({});
