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

import { Stack, Space, Text, Title, Container, Group } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang/LangKeys";
import { CenteredLayout } from "@src/components/templates/CenteredLayout";
import { Button } from "@atoms/Buttons";
import { CONTENT_MAX_WIDTH } from "./_constants";

export function Welcome() {
  return (
    <CenteredLayout showHeader>
      <Stack align="center" justify="center" sx={{ flex: 1 }}>
        <Stack>
          <Container size={CONTENT_MAX_WIDTH}>
            <Title order={1}>
              <FormattedMessage
                id={LangKeys.WelcomeToHaveno}
                defaultMessage="Welcome to Haveno. The world’s first Monero based decentralised exchange."
              />
            </Title>
          </Container>
          <Container size={CONTENT_MAX_WIDTH}>
            <Text size="md">
              Before you can use Haveno, we’re going to set up your account.{" "}
            </Text>
          </Container>
        </Stack>
        <Space h="lg" />
        <Group position="left" sx={{ width: CONTENT_MAX_WIDTH }}>
          <Button>Setup Account</Button>
          <Button flavor="neutral">Upload Backup</Button>
        </Group>
      </Stack>
    </CenteredLayout>
  );
}
