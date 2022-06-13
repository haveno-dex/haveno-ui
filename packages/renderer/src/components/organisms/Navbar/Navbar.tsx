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

import { createStyles, Group } from "@mantine/core";
import { NavLink } from "./_NavLink";
import { WalletBalance } from "@molecules/WalletBalance";
import { ReactComponent as Logo } from "@assets/logo-white.svg";
import { ReactComponent as CogIcon } from "@assets/cog.svg";
import { ReactComponent as NotificationIcon } from "@assets/notification.svg";
import { useSyncStatus } from "@hooks/haveno/useSyncStatus";
import { SyncStatus } from "@atoms/SyncStatus";
import { ROUTES } from "@constants/routes";

export function Navbar() {
  const { classes } = useStyles();
  const { data: syncStatus } = useSyncStatus();

  return (
    <Group align="center" className={classes.container} position="apart">
      <Group spacing="xl">
        <Logo className={classes.logo} />
        <NavLink
          label="Dashboard"
          to={ROUTES.Home}
          activeRoutes={[ROUTES.Home]}
        />
        <NavLink
          label="Market"
          to={ROUTES.Markets}
          activeRoutes={[ROUTES.Markets]}
        />
        <NavLink
          label="My Offers"
          to={ROUTES.MyOffers}
          activeRoutes={[ROUTES.MyOffers]}
        />
        <NavLink
          label="My Trades"
          to={ROUTES.MyTrades}
          activeRoutes={[ROUTES.MyTrades]}
        />
        <NavLink
          label="Wallet"
          to={ROUTES.MyWallet}
          activeRoutes={[ROUTES.MyWallet]}
        />
      </Group>
      <Group spacing="xl">
        <Group spacing="md">
          <SyncStatus status={syncStatus} />
          <WalletBalance />
        </Group>
        <Group spacing="md">
          <NavLink
            Component={<CogIcon className={classes.iconButton} />}
            to={ROUTES.NodeSettings}
            activeRoutes={[
              ROUTES.PaymentAccounts,
              ROUTES.AddPaymentAccount,
              ROUTES.NodeSettings,
              ROUTES.Backup,
              ROUTES.Wallet,
              ROUTES.Security,
            ]}
          />
          <NavLink
            Component={<NotificationIcon className={classes.iconButton} />}
            to={ROUTES.Notifications}
            activeRoutes={[ROUTES.Notifications]}
          />
        </Group>
      </Group>
    </Group>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.blue[6],
    height: "4rem",
    position: "relative",
    padding: "0 2rem",
  },
  logo: {
    height: "2rem !important",
    marginRight: "1rem",
    width: "2rem !important",
  },
  iconButton: {
    height: "1.5rem !important",
    width: "1.5rem !important",
  },
  nav: {
    border: 0,
    padding: 0,
    paddingLeft: theme.spacing.md,
  },
  syncStatusContainer: {
    margin: theme.spacing.lg,
  },
  walletBalance: {
    marginRight: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  },
}));
