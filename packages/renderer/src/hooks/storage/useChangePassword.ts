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
import { getIpcError } from "@utils/get-ipc-error";
import { createSession } from "@utils/session";

interface Variables {
  currentPassword: string;
  newPassword: string;
}

export function useChangePassword() {
  const queryClient = useQueryClient();

  return useMutation<string, Error, Variables>(
    async (variables: Variables) => {
      try {
        const authToken = await window.electronStore.changePassword(variables);
        return authToken;
      } catch (ex) {
        throw new Error(getIpcError(ex as Error));
      }
    },
    {
      onSuccess: (authToken) => {
        // update the session jwt
        createSession(authToken).then(() => {
          queryClient.invalidateQueries(QueryKeys.StorageAccountInfo);
        });
      },
    }
  );
}
