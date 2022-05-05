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
import { Heading } from ".";

export default {
  title: "atoms/Typography/Heading",
  component: Heading,
  argTypes: {
    order: {
      options: [1, 2, 3, 4, 5],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  return (
    <Stack>
      <Heading {...args} />
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {
  order: 1,
  children: "This is a heading",
};
