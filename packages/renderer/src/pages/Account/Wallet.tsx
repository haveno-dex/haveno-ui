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

import { Box, createStyles, Group, Stack } from "@mantine/core";
import { BodyText, Heading } from "@atoms/Typography";
import { WalletManagement } from "@organisms/WalletManagement/WalletManagement";
import { AccountLayout } from "@templates/AccountLayout";
import { LangKeys } from "@constants/lang";

export function Wallet() {
  const { classes } = useStyles();
  return (
    <AccountLayout>
      <Box>
        <Stack spacing="lg" className={classes.content}>
          <Group spacing="sm">
            <Heading stringId={LangKeys.AccountWalletTitle} order={3}>
              Your wallet details
            </Heading>
            <BodyText heavy stringId={LangKeys.AccountWalletDesc} size="md">
              The Haveno wallet is permanently connected to your account. Solely
              saving your seed phrase is not enough to recover your account, you
              need to download a backup of your account, which you can download
              via the backup section.
            </BodyText>
          </Group>
        </Stack>
        <WalletManagement />
      </Box>
    </AccountLayout>
  );
}

const useStyles = createStyles((theme) => ({
  content: {
    maxWidth: theme.other.contentWidthMd,
  },
}));
