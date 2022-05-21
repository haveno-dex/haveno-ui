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

import { Container } from "@mantine/core";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReadyToUse } from ".";

export default {
  title: "molecules/ReadyToUse",
  component: ReadyToUse,
} as ComponentMeta<typeof ReadyToUse>;

const Template: ComponentStory<typeof ReadyToUse> = () => {
  return (
    <Container>
      <ReadyToUse onSubmit={() => console.log("onSubmit called")} />
    </Container>
  );
};

export const Default = Template.bind({});
