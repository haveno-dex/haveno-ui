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

import { useIntl } from "react-intl";
import { Container, createStyles, Stack } from "@mantine/core";
import { Tabs } from "@atoms/Tabs";
import { MyWalletMoneroBalance } from "@organisms/MyWalletMoneroBalance";
import { MyWalletPrimaryAddress } from "@organisms/MyWalletPrimaryAddress";
import { MyWalletSendForm } from "@organisms/MyWalletSendForm";
import { MyWalletReceive } from "@organisms/MyWalletReceive";
import { NavbarLayout } from "@templates/NavbarLayout";
import { LangKeys } from "@constants/lang";
import { MyWalletTransactions } from "@organisms/MyWalletTransactions/MyWalletTransactions";

export function MyWallet() {
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  return (
    <NavbarLayout>
      <Container size="md" mt="xl" className={classes.container}>
        <Stack spacing="lg">
          <MyWalletMoneroBalance />
          <MyWalletPrimaryAddress />
        </Stack>

        <Tabs className={classes.tabsRoot} pb="xl">
          <Tabs.Tab
            label={formatMessage({
              id: LangKeys.MyWalletTabTransactions,
              defaultMessage: "Transactions",
            })}
          >
            <MyWalletTransactions />
          </Tabs.Tab>

          <Tabs.Tab
            label={formatMessage({
              id: LangKeys.MyWalletTabSend,
              defaultMessage: "Send",
            })}
          >
            <MyWalletSendForm />
          </Tabs.Tab>

          <Tabs.Tab
            label={formatMessage({
              id: LangKeys.MyWalletTabReceive,
              defaultMessage: "Receive",
            })}
          >
            <MyWalletReceive />
          </Tabs.Tab>
        </Tabs>
      </Container>
    </NavbarLayout>
  );
}

const useStyles = createStyles(() => ({
  tabsRoot: {
    marginTop: "3rem",
  },
  container: {
    width: "100%",
  },
}));
