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

import { Box, createStyles, Group } from "@mantine/core";
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
    <Group className={classes.container} spacing="sm">
      <Box component="span" className={classes.syncDot} />
      <BodyText heavy className={classes.message}>
        {status}
      </BodyText>
    </Group>
  );
}

const useStyles = createStyles<string, { syncStatus: SyncStatusOptions }>(
  (theme, { syncStatus }) => ({
    container: {
      backgroundColor: theme.colors.gray[1],
      borderRadius: "0.5rem",
      padding: "0.75rem 1rem",
    },
    message: {},
    notSynced: {},
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
