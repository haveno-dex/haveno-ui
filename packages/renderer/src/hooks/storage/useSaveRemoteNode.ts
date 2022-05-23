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
import { useMutation, useQueryClient } from "react-query";

interface Variables {
  uri?: string;
}

export function useSaveRemoteNode() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Variables>(
    async (variables: Variables) => {
      return window.electronStore.setMoneroNode(variables.uri);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.StoragePreferences);
      },
    }
  );
}
