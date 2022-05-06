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

import { Stack, Navbar, createStyles } from "@mantine/core";

interface SecondarySidebarProps {
  children: Array<JSX.Element>;
}

/**
 * Secondary sidebar.
 * @param   {SecondarySidebarProps}
 * @returns {JSX.Element}
 */
export function SecondarySidebar({ children }: SecondarySidebarProps) {
  const { classes } = useStyles();

  return (
    <Stack>
      <Navbar className={classes.navbar}>{children}</Navbar>
    </Stack>
  );
}

const useStyles = createStyles<string>(() => ({
  navbar: {
    background: "transparent",
    border: 0,
  },
}));
