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

import { FormattedMessage } from "react-intl";
import { Space, Stack, Text } from "@mantine/core";
import { LangKeys } from "@constants/lang/LangKeys";
import { CenteredLayout } from "@templates/CenteredLayout";
import Logo from "@assets/logo.svg";
import { ConnectionProgress } from "@atoms/ConnectionProgress";

export function Home() {
  return (
    <CenteredLayout>
      <Stack align="center" justify="center" sx={{ flex: 1 }}>
        <Stack>
          <img src={Logo} alt="Haveno" />
          <Text size="lg">
            <FormattedMessage
              id={LangKeys.AppHeading2}
              defaultMessage="Monero based decentralized exchange"
            />
          </Text>
        </Stack>
        <Space h="lg" />
        <ConnectionProgress />
      </Stack>
    </CenteredLayout>
  );
}
