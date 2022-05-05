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
import { WalletBalance } from "@molecules/WalletBalance";
import { ReactComponent as Logo } from "@assets/logo-icon.svg";
import { NavLink } from "./_NavLink";
import { NAV_LINKS, WIDTH } from "./_constants";

export function Sidebar() {
  const { classes } = useStyles();
  return (
    <Stack className={classes.container}>
      <Navbar height="100%" p={0} pl="sm" width={{ base: WIDTH }}>
        <Navbar.Section>
          <Box component={Logo} className={classes.logo} />
        </Navbar.Section>
        {NAV_LINKS.map((link) => (
          <Navbar.Section key={link.label}>
            <NavLink {...link} />
          </Navbar.Section>
        ))}
        <Navbar.Section>
          <Box mt="lg">
            <WalletBalance />
          </Box>
        </Navbar.Section>
      </Navbar>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  logo: {
    height: "2rem",
    padding: `${theme.spacing.lg}px ${theme.spacing.lg}px`,
  },
  container: {
    width: WIDTH,
  },
}));
