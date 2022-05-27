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
import { AddressCard } from "./AddressCard";

export default {
  title: "molecules/AddressCard",
  component: AddressCard,
} as ComponentMeta<typeof AddressCard>;

const Template: ComponentStory<typeof AddressCard> = (args) => {
  return (
    <Stack>
      <AddressCard
        {...args}
        primary={true}
        qrModalProps={{ target: "#root" }}
      />
      <AddressCard
        {...args}
        primary={false}
        qrModalProps={{ target: "#root" }}
      />
    </Stack>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: "Primary Address",
  primary: true,
  address:
    "44tgg3TkQ2jGRDabB5cjbNWDF7PKDBKqw2bsjgRRCQSThiE15ePWk6kJFH7YWnPKR88JQB8WwDX34TwfYnhWVeT1J1rC6b7",
};
