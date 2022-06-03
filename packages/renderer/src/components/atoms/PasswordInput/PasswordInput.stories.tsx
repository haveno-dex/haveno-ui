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
import { EyeCheck, EyeOff } from "tabler-icons-react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { PasswordInput } from ".";

export default {
  title: "atoms/PasswordInput",
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = () => {
  return (
    <Stack>
      <PasswordInput
        id="password"
        label="Change visibility toggle icon"
        placeholder="Change visibility toggle icon"
        defaultValue="secret"
        visibilityToggleIcon={({ reveal, size }) =>
          reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
        }
      />
    </Stack>
  );
};

export const Default = Template.bind({});
