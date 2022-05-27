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
import { Stack } from "@mantine/core";
import { AddressCardSkeleton } from "./AddressCard";

export default {
  title: "molecules/AddressCardSkeleton",
  component: AddressCardSkeleton,
} as ComponentMeta<typeof AddressCardSkeleton>;

const Template: ComponentStory<typeof AddressCardSkeleton> = (args) => {
  return (
    <Stack>
      <AddressCardSkeleton {...args} primary={false} />
      <AddressCardSkeleton {...args} primary={true} />
    </Stack>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: "Primary Address",
  primary: true,
};
