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

import { Stack, createStyles, Group } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { Button } from "@atoms/Buttons";
import { NodeStatus, NodeStatusType } from "@atoms/NodeStatus";
import { LangKeys } from "@constants/lang";
import { useMoneroRemoteNodes } from "@hooks/haveno/useMoneroRemoteNodes";

export function NodeRemoteStatus() {
  const { data: remoteNodes } = useMoneroRemoteNodes();

  return (
    <Stack>
      {remoteNodes?.map((node) => (
        <NodeStatus
          key={node.title}
          title={node.title}
          status={
            node.isActive ? NodeStatusType.Active : NodeStatusType.Inactive
          }
        />
      ))}
      <AddNewNodeButton />

      <Group position="right" mt="sm">
        <Button size="md">
          <FormattedMessage id={LangKeys.Save} defaultMessage="Save" />
        </Button>
      </Group>
    </Stack>
  );
}

function AddNewNodeButton({ ...rest }) {
  const { classes } = useStyles();

  return (
    <Button
      variant="subtle"
      color="dark"
      classNames={{
        root: classes.root,
        inner: classes.inner,
      }}
      {...rest}
    >
      +{" "}
      <FormattedMessage
        id={LangKeys.AccountSettingsAddNode}
        defaultMessage="Add a new node"
      />
    </Button>
  );
}

const useStyles = createStyles(() => ({
  root: {
    padding: "0.8rem",
    height: 45,
  },
  inner: {
    justifyContent: "start",
  },
}));
