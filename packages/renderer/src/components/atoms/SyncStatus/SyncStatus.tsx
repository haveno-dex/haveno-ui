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

import { Box, createStyles, Group, Stack, Text } from "@mantine/core";
import { BodyText } from "@atoms/Typography";
import { SyncStatus as SyncStatusOptions } from "@constants/sync-status";

interface SyncStatusProps {
  status?: SyncStatusOptions;
}

export function SyncStatus({
  status = SyncStatusOptions.NotSynced,
}: SyncStatusProps) {
  const { classes } = useStyles({ syncStatus: status });

  return (
    <Stack className={classes.container} spacing={2}>
      <Group spacing={4}>
        <Box component="span" className={classes.syncDot} />
        <BodyText heavy className={classes.message}>
          {status}
        </BodyText>
      </Group>
      <Text className={classes.nodeName}>node.sethforprivacy.com</Text>
    </Stack>
  );
}

const useStyles = createStyles<string, { syncStatus: SyncStatusOptions }>(
  (theme, { syncStatus }) => ({
    container: {
      background: "rgba(17, 17, 17, 0.15)",
      borderRadius: theme.radius.md,
      padding: `${theme.spacing.xs * 0.8}px ${theme.spacing.xs}px`,
    },
    message: {
      color: theme.colors.white,
      fontSize: "0.5rem",
      fontWeight: 700,
      opacity: 0.8,
      textTransform: "uppercase",
    },
    nodeName: {
      color: theme.colors.white,
      fontSize: "0.75rem",
      fontWeight: 600,
    },
    syncDot: {
      backgroundColor:
        syncStatus === SyncStatusOptions.Full
          ? theme.colors.green[4]
          : syncStatus === SyncStatusOptions.InProgress
          ? theme.colors.orange[4]
          : theme.colors.gray[4],
      borderRadius: 50,
      height: "0.5rem",
      width: "0.5rem",
    },
  })
);
