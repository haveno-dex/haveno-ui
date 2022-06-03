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

import { Box, createStyles, Navbar, Stack } from "@mantine/core";
import { NAV_LINKS, WIDTH } from "./_constants";
import { NavLink } from "./_NavLink";
import { WalletBalance } from "@molecules/WalletBalance";
import { ReactComponent as Logo } from "@assets/logo-icon.svg";
import { SyncStatus } from "@atoms/SyncStatus";
import { useSyncStatus } from "@hooks/haveno/useSyncStatus";

export function Sidebar() {
  const { classes } = useStyles();
  const { data: syncStatus } = useSyncStatus();

  return (
    <Stack className={classes.container} justify="space-between">
      <Navbar className={classes.nav} width={{ base: WIDTH - 1 }}>
        <Navbar.Section>
          <Box component={Logo} className={classes.logo} />
        </Navbar.Section>
        {NAV_LINKS.map((link) => (
          <Navbar.Section key={link.label}>
            <NavLink {...link} />
          </Navbar.Section>
        ))}
        <Navbar.Section>
          <Box className={classes.walletBalance}>
            <WalletBalance />
          </Box>
        </Navbar.Section>
      </Navbar>
      <Box className={classes.syncStatusContainer}>
        <SyncStatus status={syncStatus} />
      </Box>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    borderRight: `solid 1px ${theme.colors.gray[1]}`,
    position: "relative",
    width: WIDTH,
  },
  logo: {
    height: "2rem",
    padding: `${theme.spacing.lg}px ${theme.spacing.lg}px`,
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
