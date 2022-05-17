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

import { BodyText } from "@atoms/Typography";
import { Stack } from "@mantine/core";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Currency } from ".";

export default {
  title: "atoms/Currency",
  component: Currency,
} as ComponentMeta<typeof Currency>;

const Template: ComponentStory<typeof Currency> = (args) => {
  return (
    <Stack>
      <BodyText heavy>
        <Currency {...args} />
      </BodyText>
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {
  currencyCode: "EUR",
  value: 400000.12,
};
