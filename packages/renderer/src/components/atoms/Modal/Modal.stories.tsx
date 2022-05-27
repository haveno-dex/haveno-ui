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

import { useState } from "react";
import { Group, Text } from "@mantine/core";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "@atoms/Buttons";

export default {
  title: "atoms/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ ...props }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        {...props}
        opened={opened}
        onClose={() => setOpened(false)}
        title="Funds are sent!"
      >
        <Text color="gray">
          You’ve sent 1.15 XMR to:
          44tgg3TkQ2jGRDabB5cjbNWDF7PKDBKqw2bsjgRRCQSThiE15ePWk6kJFH7YWnPKR88JQB8WwDX34TwfYnhWVeT1J1rC6b7
        </Text>
        <Group mt="lg">
          <Button>Go to Wallet</Button>
        </Group>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {};
