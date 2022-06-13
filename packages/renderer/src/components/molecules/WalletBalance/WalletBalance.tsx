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

import { createStyles, Group, Skeleton, Stack, Text } from "@mantine/core";
import { useBalances } from "@hooks/haveno/useBalances";
import { Currency } from "@atoms/Currency";

export function WalletBalance() {
  const { classes } = useStyles();
  const { data: balances, isLoading: isLoadingBalance } = useBalances();

  return (
    <Group className={classes.container} spacing="sm" position="apart">
      <Stack spacing={2}>
        <Text className={classes.heading}>Available Balance</Text>
        <BalanceValue
          isLoading={isLoadingBalance}
          value={balances?.availableBalance || 0}
        />
      </Stack>
      <Stack spacing={2}>
        <Text className={classes.heading}>Locked Funds</Text>
        <BalanceValue
          isLoading={isLoadingBalance}
          value={balances?.lockedBalance || 0}
        />
      </Stack>
      <Stack spacing={2}>
        <Text className={classes.heading}>Reserved Funds</Text>
        <BalanceValue
          isLoading={isLoadingBalance}
          value={balances?.reservedBalance || 0}
        />
      </Stack>
    </Group>
  );
}

interface BalanceValueProps {
  isLoading: boolean;
  value: number;
}

function BalanceValue({ isLoading, value }: BalanceValueProps) {
  const { classes } = useStyles();
  if (isLoading) {
    return <Skeleton height={12} my={3} sx={{ opacity: 0.15 }} />;
  }
  return (
    <Text className={classes.balanceValue}>
      <Currency value={value} />
    </Text>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    background: "rgba(17, 17, 17, 0.15)",
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.xs * 0.8}px ${theme.spacing.xs}px`,
  },
  heading: {
    color: theme.colors.white,
    fontSize: "0.5rem",
    fontWeight: 700,
    opacity: 0.8,
    textTransform: "uppercase",
  },
  balanceValue: {
    color: theme.colors.white,
    fontSize: "0.75rem",
    fontWeight: 600,
  },
}));
