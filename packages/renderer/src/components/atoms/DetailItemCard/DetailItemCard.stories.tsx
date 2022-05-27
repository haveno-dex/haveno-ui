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
import { DetailItemCard } from "./DetailItemCard";

export default {
  title: "atoms/DetailItemCard",
  component: DetailItemCard,
} as ComponentMeta<typeof DetailItemCard>;

const Template: ComponentStory<typeof DetailItemCard> = (props) => {
  return (
    <Stack>
      <DetailItemCard {...props} />
    </Stack>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: "Primary Label",
  children: "Content here",
  primary: false,
};
