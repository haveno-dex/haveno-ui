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
import { SecondarySidebar } from "./SecondarySidebar";
import { SecondarySidebarItem } from "./SecondarySidebarItem";

export default {
  title: "atoms/SecondarySidebar",
  component: SecondarySidebar,
} as ComponentMeta<typeof SecondarySidebar>;

const menu = [
  {
    label: "Payment Accounts",
    isActive: true,
  },
  {
    label: "Node Settings",
  },
  {
    label: "Security",
  },
  {
    label: "Wallet",
  },
  {
    label: "Back",
  },
];

const Template: ComponentStory<typeof SecondarySidebar> = () => {
  return (
    <SecondarySidebar>
      {menu.map((item) => (
        <SecondarySidebarItem
          key={item.label}
          label={item.label}
          isActive={item.isActive}
        />
      ))}
    </SecondarySidebar>
  );
};

export const Default = Template.bind({});
Default.args = {};
