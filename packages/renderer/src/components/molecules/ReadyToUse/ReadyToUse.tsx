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

import { Stack, Space, Group } from "@mantine/core";
import { Button } from "@atoms/Buttons";
import { Heading, BodyText } from "@atoms/Typography";

interface ReadyToUseProps {
  onSubmit: () => void;
}

export function ReadyToUse(props: ReadyToUseProps) {
  const { onSubmit } = props;

  return (
    <Stack>
      <Heading order={1}>Haveno is ready for use.</Heading>
      <BodyText size="lg">
        You’ve succesfully set up Haveno. Please note that to be able to trade,
        you need to deposit Monero in your Haveno wallet and set up a payment
        account.
      </BodyText>
      <Space h="lg" />
      <Group position="apart">
        <Button type="submit" onClick={onSubmit}>
          Start using Haveno
        </Button>
      </Group>
    </Stack>
  );
}
