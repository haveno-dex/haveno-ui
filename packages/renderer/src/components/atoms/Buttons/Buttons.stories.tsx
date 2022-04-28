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

import { Group, Stack } from "@mantine/core";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "atoms/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => {
  return (
    <Stack>
      <Button flavor="primary">Primary</Button>
      <Button flavor="neutral">Neutral</Button>
      <Button flavor="success">Success</Button>
      <Button flavor="danger">Error</Button>

      <Group>
        <Button flavor="primary">Primary</Button>
        <Button flavor="neutral">Neutral</Button>
        <Button flavor="success">Success</Button>
        <Button flavor="danger">Error</Button>
      </Group>
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {};
