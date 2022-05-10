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

import { useState } from "react";
import { createStyles, Stack, Text } from "@mantine/core";

export function Synce() {
  const [isOpen, setOpen] = useState(false);
  const { classes } = useStyles({ isOpen });
  const [isSynce, setSynec] = useState("false");
  return (
    <Stack>
      <span className={isSynce ? classes.syncedot : classes.notSyncedot}></span>
      <Text className={isSynce ? classes.synced : classes.notSynced}>
        {isSynce ? "Fully Synced" : "Not Synced"}
      </Text>
    </Stack>
  );
}

const useStyles = createStyles<string, { isOpen: boolean }>(
  (theme, params) => ({
    synced: {
      bottom: 5,
      display: "block",
      fontSize: "0.725rem",
      fontWeight: 600,
      marginBottom: 5,
      marginLeft: 40,
      position: "absolute",
    },
    notSynced: {
      bottom: 5,
      color: theme.colors.gray[9],
      display: "block",
      fontSize: "0.725rem",
      fontWeight: 600,
      marginBottom: 5,
      marginLeft: 40,
      position: "absolute",
    },
    syncedot: {
      backgroundColor: theme.colors.green[4],
      borderRadius: 50,
      bottom: 16,
      height: 8,
      marginLeft: 20,
      position: "absolute",
      width: 8,
    },
    notSyncedot: {
      backgroundColor: theme.colors.red[4],
      borderRadius: 50,
      bottom: 16,
      height: 8,
      marginLeft: 20,
      position: "absolute",
      width: 8,
    },
  })
);
