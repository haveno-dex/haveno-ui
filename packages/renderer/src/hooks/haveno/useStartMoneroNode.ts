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

import { QueryKeys } from "@constants/query-keys";
import type { MoneroNodeSettings } from "haveno-ts";
import { useMutation, useQueryClient } from "react-query";
import { useHavenoClient } from "./useHavenoClient";

export function useStartMoneroNode() {
  const client = useHavenoClient();
  const queryClient = useQueryClient();

  return useMutation<void, Error, MoneroNodeSettings>(
    (data: MoneroNodeSettings) => client.startMoneroNode(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.MoneroNodeIsRunning);
      },
    }
  );
}
