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
import { UrlConnection } from "haveno-ts";
import { useHavenoClient } from "./useHavenoClient";
import { QueryKeys } from "@constants/query-keys";

interface Variables {
  address: string;
  port: string;
  user?: string;
  password?: string;
}

export function useAddMoneroNode() {
  const queryClient = useQueryClient();
  const client = useHavenoClient();

  return useMutation<void, Error, Variables>(
    async (data: Variables) => {
      const url = new URL(data.address);
      if (data.port) {
        url.port = data.port + "";
      }
      const conn = new UrlConnection().setUrl(url.toString()).setPriority(1);
      if (data.user) {
        conn.setUsername(data.user);
      }
      if (data.password) {
        conn.setPassword(data.password);
      }
      client.addMoneroConnection(conn);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.MoneroConnections);
      },
    }
  );
}
