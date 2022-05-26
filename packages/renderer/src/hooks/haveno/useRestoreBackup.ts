/* eslint-disable @typescript-eslint/ban-ts-comment */
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

import { hideNotification, showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { MoneroNodeSettings } from "haveno-ts";
import { useHavenoClient } from "./useHavenoClient";
import { Notifications } from "@constants/notifications";
import { deleteSession } from "@utils/session";
import { ROUTES } from "@constants/routes";

export function useRestoreBackup() {
  const client = useHavenoClient();
  const navigate = useNavigate();

  return useMutation(
    async () => {
      const bytes = await window.haveno.getBackupData();

      if (!bytes.length) {
        return;
      }
      showNotification({
        id: Notifications.AccountRestoring,
        title: "Account Restoring.",
        message: "Account is restoring from the file.",
        loading: true,
      });
      await client.deleteAccount();
      await client.restoreAccount(bytes);

      hideNotification(Notifications.AccountRestoring);
      showNotification({
        id: Notifications.MoneroRestartAfterRestoring,
        title: "Monero restarting.",
        message:
          "The account has been restored, now the Monero node restarting.",
        loading: true,
      });
      deleteSession();
      navigate(ROUTES.Login);

      if (await client.isMoneroNodeRunning()) {
        await client.stopMoneroNode();
      }
      try {
        await client.startMoneroNode(new MoneroNodeSettings());
      } catch (ex) {
        console.log(ex);
        throw new Error("Failed to start the monero node");
      }
      hideNotification(Notifications.MoneroRestartAfterRestoring);
    },
    {
      onError: (err: Error) => {
        hideNotification(Notifications.AccountRestoring);
        hideNotification(Notifications.MoneroRestartAfterRestoring);

        showNotification({
          color: "red",
          message: err?.message ?? "Unable to restore backup",
          title: "Something went wrong",
        });
      },
    }
  );
}
