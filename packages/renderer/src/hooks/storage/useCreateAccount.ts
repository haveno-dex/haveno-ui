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
  password: string;
  primaryFiat: string;
  moneroNode: string;
}

export function useCreateAccount() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Variables>(
    async (variables: Variables) => {
      await Promise.all([
        window.electronStore.setPassword({ newPassword: variables.password }),
        window.electronStore.setPrimaryFiat(variables.primaryFiat),
        window.electronStore.setMoneroNode(variables.moneroNode),
      ]);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.StorageAccountInfo);
        queryClient.invalidateQueries(QueryKeys.StoragePreferences);
      },
    }
  );
}
