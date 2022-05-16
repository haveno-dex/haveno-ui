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

import { createStyles } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import { NodeConnectSwitch } from "@atoms/NodeConnectSwitch";
import { ReactComponent as CloudIcon } from "@assets/setting-cloud.svg";
import { ReactComponent as ServerIcon } from "@assets/setting-server.svg";
import { NodeLocalForm } from "./NodeLocalForm";
import { NodeRemoteStatus } from "./NodeRemoteStatus";
import {
  LocalNodeSettingsBoot,
  RemoteNodeSettingsBoot,
} from "./NodeSettingsBoot";

export function NodeSettingsSwitch() {
  const { classes } = useStyles();

  return (
    <NodeConnectSwitch
      initialTab="local-node"
      className={classes.connectSwitch}
    >
      <NodeConnectSwitch.Method
        active={true}
        current={true}
        tabKey="local-node"
        label={
          <FormattedMessage
            id={LangKeys.AccountNodeSettingsLocal}
            defaultMessage="Local Node"
          />
        }
        icon={<ServerIcon width={32} height={62} />}
      >
        <LocalNodeSettingsBoot>
          <NodeLocalForm />
        </LocalNodeSettingsBoot>
      </NodeConnectSwitch.Method>

      <NodeConnectSwitch.Method
        tabKey="remote-node"
        label={
          <FormattedMessage
            id={LangKeys.AccountNodeSettingsRemote}
            defaultMessage="Remote Node"
          />
        }
        icon={<CloudIcon width={58} height={54} />}
      >
        <RemoteNodeSettingsBoot>
          <NodeRemoteStatus />
        </RemoteNodeSettingsBoot>
      </NodeConnectSwitch.Method>
    </NodeConnectSwitch>
  );
}

const useStyles = createStyles(() => ({
  connectSwitch: {
    marginBottom: "2rem",
  },
}));
