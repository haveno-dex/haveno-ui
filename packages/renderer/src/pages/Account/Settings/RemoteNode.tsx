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

import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Stack, Group, Modal } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Button, TextButton } from "@atoms/Buttons";
import { MoneroNodeListItem, NodeStatus } from "@atoms/MoneroNodeListItem";
import { AddNode } from "@organisms/AddNode";
import { useMoneroConnections } from "@hooks/haveno/useMoneroConnections";
import { useAddMoneroNode } from "@hooks/haveno/useAddMoneroNode";
import { useSetMoneroConnection } from "@hooks/haveno/useSetMoneroConnection";
import { useGetMoneroConnection } from "@hooks/haveno/useGetMoneroConnection";
import { LangKeys } from "@constants/lang";
import type { AddNodeFormValues } from "@organisms/AddNode";

export function RemoteNode() {
  const [isAdding, setAdding] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>();
  const { data: connections } = useMoneroConnections();
  const { data: selectedConnection } = useGetMoneroConnection();
  const { mutate: addMoneroNode } = useAddMoneroNode();
  const { mutate: setMoneroConnection } = useSetMoneroConnection();

  const handleAddNode = (data: AddNodeFormValues) => {
    const { address, port, user, password } = data;
    addMoneroNode(
      {
        address,
        port,
        user,
        password,
      },
      {
        onError: (err) => {
          console.log(err);
          showNotification({
            color: "red",
            message: err.message,
            title: "Something went wrong",
          });
        },
        onSuccess: () => {
          setAdding(false);
          showNotification({
            color: "green",
            message: "Saved",
          });
        },
      }
    );
  };

  const handleSave = () => {
    if (!selectedNode) {
      return;
    }
    setMoneroConnection(
      { uri: selectedNode },
      {
        onError: (err) => {
          console.dir(err);
          showNotification({
            color: "red",
            message: err.message,
            title: "Something went wrong",
          });
        },
        onSuccess: () => {
          showNotification({
            color: "green",
            message: "Saved",
          });
        },
      }
    );
  };

  useEffect(() => {
    if (selectedConnection) {
      setSelectedNode(selectedConnection.getUrl());
    }
  }, [selectedConnection]);

  return (
    <>
      <Stack>
        {connections?.map((conn) => (
          <MoneroNodeListItem
            key={conn.url}
            title={conn.url}
            status={
              conn.onlineStatus === 1 ? NodeStatus.Active : NodeStatus.Inactive
            }
            isSelected={conn.url === selectedNode}
            onClick={() => setSelectedNode(conn.url)}
          />
        ))}

        <Group position="apart" mt="sm">
          <TextButton onClick={() => setAdding(true)}>
            <FormattedMessage
              id={LangKeys.AccountSettingsAddNode}
              defaultMessage="Add a new node"
            />
          </TextButton>
          <Button
            disabled={
              !selectedNode || selectedNode === selectedConnection?.getUrl()
            }
            size="md"
            onClick={handleSave}
          >
            <FormattedMessage id={LangKeys.Save} defaultMessage="Save" />
          </Button>
        </Group>
      </Stack>
      <Modal
        opened={isAdding}
        withCloseButton
        onClose={() => setAdding(false)}
        size="sm"
        radius="md"
        title="Add a new node"
      >
        <AddNode onSubmit={handleAddNode} showTitle={false} />
      </Modal>
    </>
  );
}
