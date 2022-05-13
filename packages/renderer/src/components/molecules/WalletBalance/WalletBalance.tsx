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

import { useState, useMemo } from "react";
import {
  Collapse,
  createStyles,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ReactComponent as XMRLogo } from "@assets/xmr-logo-1.svg";
import { ReactComponent as ArrowDown } from "@assets/arrow-down.svg";
import { useBalances } from "@hooks/haveno/useBalances";

export function WalletBalance() {
  const [isOpen, setOpen] = useState(false);
  const { classes } = useStyles({ isOpen });
  const { data: availableBalances } = useBalances();
  const Total = useMemo(() => {
    return (
      Number(availableBalances?.getLockedBalance() || 0) +
      Number(availableBalances?.getReservedTradeBalance() || 0)
    ).toString();
  }, [availableBalances]);
  return (
    <UnstyledButton
      className={classes.btnToggle}
      onClick={() => setOpen(!isOpen)}
    >
      <Stack>
        <Group spacing="sm">
          <XMRLogo className={classes.xmrLogo} />
          <Text className={classes.heading} weight={700}>
            Available Balance
          </Text>
        </Group>
        <Stack spacing={4}>
          <Group>
            <Text className={classes.xmr}>
              {availableBalances?.getBalance() ?? 0}
            </Text>
            <ArrowDown className={classes.toggleIcon} />
          </Group>
          <Text className={classes.fiat}>(EUR 2441,02)</Text>
        </Stack>
        <Collapse in={isOpen}>
          <Stack>
            <Stack spacing={4}>
              <Text className={classes.balanceLabel}>Total</Text>
              <Text className={classes.balanceValue}>{Total}</Text>
            </Stack>
            <Stack spacing={4}>
              <Text className={classes.balanceLabel}>Reserved</Text>
              <Text className={classes.balanceValue}>
                {availableBalances?.getReservedTradeBalance() ?? 0}
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Text className={classes.balanceLabel}>Locked</Text>
              <Text className={classes.balanceValue}>
                {availableBalances?.getLockedBalance() ?? 0}
              </Text>
            </Stack>
          </Stack>
        </Collapse>
      </Stack>
    </UnstyledButton>
  );
}

const useStyles = createStyles<string, { isOpen: boolean }>(
  (theme, params) => ({
    btnToggle: {
      border: `solid 1px ${theme.colors.gray[4]}`,
      borderRadius: theme.radius.md,
      padding: theme.spacing.md,

      "&:hover": {
        borderColor: theme.colors.gray[5],
      },
    },
    xmrLogo: {
      width: 20,
    },
    toggleIcon: {
      transform: `rotate(${params.isOpen ? 180 : 0}deg)`,
      transition: "transform 0.2s",
      width: 8,
    },
    heading: {
      fontSize: "0.5rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    xmr: {
      fontSize: "0.75rem",
      fontWeight: 600,
    },
    fiat: {
      color: theme.colors.gray[6],
      fontSize: "0.625rem",
      fontWeight: 500,
    },
    balanceLabel: {
      color: theme.colors.gray[6],
      fontSize: "0.625rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    balanceValue: {
      color: theme.colors.gray[8],
      fontSize: "0.625rem",
      fontWeight: 600,
    },
  })
);
