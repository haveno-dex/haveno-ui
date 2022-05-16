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
import { QueryKeys } from "@constants/query-keys";
import { useHavenoClient } from "./useHavenoClient";

interface SetMeneroNodeSettingsVariables {
  blockchainPath?: string;
  bootstrapUrl?: string;
  startupFlags?: Array<string>;
}

export function useSetMoneroNodeSettings() {
  const queryClient = useQueryClient();
  const client = useHavenoClient();

  return useMutation(
    async (data: SetMeneroNodeSettingsVariables) => {
      const nodeSettings = await client.getMoneroNodeSettings();

      data.blockchainPath &&
        nodeSettings?.setBlockchainPath(data.blockchainPath);
      data.startupFlags && nodeSettings?.setStartupFlagsList(data.startupFlags);
      data.bootstrapUrl && nodeSettings?.setBootstrapUrl(data.bootstrapUrl);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.MoneroNodeSettings);
      },
    }
  );
}
