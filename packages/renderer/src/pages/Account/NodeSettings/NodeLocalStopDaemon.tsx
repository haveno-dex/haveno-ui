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

import { FormattedMessage, useIntl } from "react-intl";
import { createStyles } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Button } from "@atoms/Buttons";
import { LangKeys } from "@constants/lang";
import { useMoneroNodeSettings } from "@hooks/haveno/useMoneroNodeSettings";
import { useStopMoneroNode } from "@hooks/haveno/useStopMoneroNode";
import { useIsMoneroNodeRunning } from "@hooks/haveno/useIsMoneroNodeRunning";
import { useStartMoneroNode } from "@hooks/haveno/useStartMoneroNode";

export function NodeLocalStopDaemon() {
  const { classes } = useStyles();
  const intl = useIntl();

  const { mutateAsync: stopMoneroNode } = useStopMoneroNode();
  const { data: isMoneroNodeRunning } = useIsMoneroNodeRunning();
  const { mutateAsync: startMoneroNode } = useStartMoneroNode();
  const { isLoading: isNodeSettingsLoading, data: nodeSettings } =
    useMoneroNodeSettings();

  // handle the stop button click.
  const handleStopBtnClick = () => {
    stopMoneroNode()
      .then(() => {
        showNotification({
          color: "green",
          message: intl.formatMessage({
            id: LangKeys.AccountNodeDaemonStoppedNotif,
            defaultMessage: "Daemon stopped successfully",
          }),
        });
      })
      .catch((err) => {
        console.dir(err);
        showNotification({
          color: "red",
          message: err.message,
          title: "Something went wrong",
        });
      });
  };
  // Handle the start button click.
  const handleStartBtnClick = () => {
    if (!nodeSettings) {
      return;
    }
    startMoneroNode(nodeSettings)
      .then(() => {
        showNotification({
          color: "green",
          message: intl.formatMessage({
            id: LangKeys.AccountNodeDaemonStartedNotif,
            defaultMessage: "Daemon started successfully",
          }),
        });
      })
      .catch((err) => {
        console.dir(err);
        showNotification({
          color: "red",
          message: err.message,
          title: "Something went wrong",
        });
      });
  };

  return (
    <div className={classes.actions}>
      {isMoneroNodeRunning ? (
        <Button flavor="neutral" onClick={handleStopBtnClick}>
          <FormattedMessage
            id={LangKeys.AccountNodeStopDaemon}
            defaultMessage="Stop daemon"
          />
        </Button>
      ) : (
        <Button
          flavor="neutral"
          onClick={handleStartBtnClick}
          disabled={Boolean(isNodeSettingsLoading || !nodeSettings)}
        >
          <FormattedMessage
            id={LangKeys.AccountNodeStopDaemon}
            defaultMessage="Start daemon"
          />
        </Button>
      )}
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  actions: {
    marginBottom: theme.spacing.xl,
  },
}));
