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

import { Stack, createStyles } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { LocalNode } from "./LocalNode";
import { RemoteNode } from "./RemoteNode";
import { NodeConnectSwitch } from "@molecules/NodeConnectSwitch";
import { BodyText, Heading } from "@atoms/Typography";
import { AccountLayout } from "@templates/AccountLayout";
import { ReactComponent as CloudIcon } from "@assets/setting-cloud.svg";
import { ReactComponent as ServerIcon } from "@assets/setting-server.svg";
import { useIsLocalNodeSelected } from "@hooks/storage/useIsLocalNodeSelected";
import { LangKeys } from "@constants/lang";

enum NodeTypes {
  Local = "local",
  Remote = "remote",
}

export function Settings() {
  const { classes } = useStyles();
  const { data: isLocalNodeSelected, isSuccess } = useIsLocalNodeSelected();

  return (
    <AccountLayout>
      <Stack className={classes.content} spacing="sm">
        <Heading stringId={LangKeys.AccountNodeSettingsTitle} order={3}>
          Your node settings
        </Heading>
        <BodyText
          stringId={LangKeys.AccountNodeSettingsDesc}
          size="md"
          className={classes.paragraph}
        >
          Using a local node is recommended, but does require loading the entire
          blockchain. Choose ‘remote node’ if you prefer a faster but less
          secure experience.
        </BodyText>
        {isSuccess && (
          <NodeConnectSwitch
            initialTab={
              isLocalNodeSelected ? NodeTypes.Local : NodeTypes.Remote
            }
            className={classes.connectSwitch}
          >
            <NodeConnectSwitch.Method
              current={isLocalNodeSelected}
              tabKey={NodeTypes.Local}
              label={
                <FormattedMessage
                  id={LangKeys.AccountNodeSettingsLocal}
                  defaultMessage="Local Node"
                />
              }
              icon={<ServerIcon width={32} height={62} />}
            >
              <LocalNode />
            </NodeConnectSwitch.Method>

            <NodeConnectSwitch.Method
              current={!isLocalNodeSelected}
              tabKey={NodeTypes.Remote}
              label={
                <FormattedMessage
                  id={LangKeys.AccountNodeSettingsRemote}
                  defaultMessage="Remote Node"
                />
              }
              icon={<CloudIcon height={54} width={58} />}
            >
              <RemoteNode />
            </NodeConnectSwitch.Method>
          </NodeConnectSwitch>
        )}
      </Stack>
    </AccountLayout>
  );
}

const useStyles = createStyles((theme) => ({
  connectSwitch: {
    marginBottom: "2rem",
  },
  content: {
    maxWidth: theme.other.contentWidthMd,
  },
  paragraph: {
    marginBottom: theme.spacing.xl,
  },
}));
