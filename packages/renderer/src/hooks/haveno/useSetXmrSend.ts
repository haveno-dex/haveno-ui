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
import { XmrDestination } from "haveno-ts";
import { showNotification } from "@mantine/notifications";
import { useHavenoClient } from "./useHavenoClient";
import { QueryKeys } from "@constants/query-keys";

interface SetXmrSendVariables {
  address: string;
  amount: string;
  paymentId?: string;
}

export function useSetXmrSend() {
  const client = useHavenoClient();
  const queryClient = useQueryClient();

  return useMutation(
    async (variables: SetXmrSendVariables) => {
      const xmrDest = new XmrDestination()
        .setAddress(variables.address)
        .setAmount(variables.amount);

      const tx = await client.createXmrTx([xmrDest]);

      return client.relayXmrTx(tx.getMetadata());
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.XmrTxs);
        queryClient.invalidateQueries(QueryKeys.Balances);
      },
      onError: (err: Error) => {
        console.dir(err);
        showNotification({
          color: "red",
          message: err.message || "",
          title: "Something went wrong",
        });
      },
    }
  );
}
