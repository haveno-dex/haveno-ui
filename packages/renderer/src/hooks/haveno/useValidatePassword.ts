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
import { useQuery } from "react-query";

interface Variables {
  password: string;
}

interface Options {
  enabled: boolean;
}

export function useValidatePassword(variables: Variables, options?: Options) {
  return useQuery<boolean>(
    QueryKeys.StorageIsPasswordValid,
    async () => {
      try {
        const authToken = await window.electronStore.verifyPassword(
          variables.password
        );
        return Boolean(authToken);
      } catch {
        return false;
      }
    },
    {
      enabled: options?.enabled ?? true,
    }
  );
}
