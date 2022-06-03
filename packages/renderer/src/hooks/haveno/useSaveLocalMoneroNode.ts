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

import { useMutation, useQueryClient } from "react-query";
import { MoneroNodeSettings } from "haveno-ts";
import { useHavenoClient } from "./useHavenoClient";
import { QueryKeys } from "@constants/query-keys";
import { useSaveRemoteNode } from "@hooks/storage/useSaveRemoteNode";

interface Variables {
  blockchainPath: string;
  bootstrapUrl: string;
  startupFlags: Array<string>;
}

export function useSaveLocalMoneroNode() {
  const queryClient = useQueryClient();
  const client = useHavenoClient();
  const { mutateAsync: saveRemoteNode } = useSaveRemoteNode();

  return useMutation<void, Error, Variables>(
    async (data: Variables) => {
      const nodeSettings = new MoneroNodeSettings();
      nodeSettings.setBlockchainPath(data.blockchainPath);
      nodeSettings.setStartupFlagsList(data.startupFlags);
      nodeSettings.setBootstrapUrl(data.bootstrapUrl);

      if (await client.isMoneroNodeRunning()) {
        // stop the node if it's running
        await client.stopMoneroNode();
      }
      // start the node with new settings
      try {
        await client.startMoneroNode(nodeSettings);
        await saveRemoteNode({}); // clear the saved remote node
      } catch (ex) {
        console.log(ex);
        throw new Error("Failed to start the monero node");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.MoneroConnections);
        queryClient.invalidateQueries(QueryKeys.MoneroNodeIsRunning);
      },
    }
  );
}
