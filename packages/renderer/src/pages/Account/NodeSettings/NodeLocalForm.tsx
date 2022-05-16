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

import { Box, Stack, Grid, Group } from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import { FormattedMessage, useIntl } from "react-intl";
import { showNotification } from "@mantine/notifications";
import { Button } from "@atoms/Buttons";
import { LangKeys } from "@constants/lang";
import { TextInput } from "@atoms/TextInput";
import { useMoneroNodeSettings } from "@hooks/haveno/useMoneroNodeSettings";
import { useSetMoneroNodeSettings } from "@hooks/haveno/useSetMoneroNodeSettings";
import { NodeLocalStopDeamon } from "./NodeLocalStopDeamon";
import type { NodeLocalFormValues } from "./_hooks";
import { useNodeLocalFormValidation } from "./_hooks";
import { transformSettingsRequestToForm } from "./_utils";

export function NodeLocalForm() {
  const { data: nodeSettings } = useMoneroNodeSettings();
  const { mutateAsync: updateNodeSettings } = useSetMoneroNodeSettings();
  const intl = useIntl();

  const validation = useNodeLocalFormValidation();

  const form = useForm<NodeLocalFormValues>({
    initialValues: {
      blockchainLocation: "",
      startupFlags: "",
      deamonAddress: "",
      port: "",
      ...(nodeSettings
        ? transformSettingsRequestToForm(nodeSettings.toObject())
        : {}),
    },
    validate: joiResolver(validation),
  });

  const handleFormSubmit = (values: NodeLocalFormValues) => {
    updateNodeSettings({
      blockchainPath: values.blockchainLocation,
      startupFlags: values.startupFlags.split(", "),
      bootstrapUrl: `${values.deamonAddress}:${values.port}`,
    })
      .then(() => {
        showNotification({
          color: "green",
          message: intl.formatMessage({
            id: LangKeys.AccountNodeLocalSaveNotification,
            defaultMessage: "Local node settings updated successfully",
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
    <Box>
      <NodeLocalStopDeamon />

      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stack spacing="lg">
          <TextInput
            id="blockchainLocation"
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldBlockchainLocation}
                defaultMessage="Blockchain location"
              />
            }
            {...form.getInputProps("blockchainLocation")}
          />
          <TextInput
            id="startupFlags"
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldDeamonFlags}
                defaultMessage="Deamon startup flags"
              />
            }
            {...form.getInputProps("startupFlags")}
          />
          <Grid>
            <Grid.Col span={9}>
              <TextInput
                id="deamonAddress"
                label={
                  <FormattedMessage
                    id={LangKeys.AccountNodeFieldDeamonAddress}
                    defaultMessage="Deamon Address"
                  />
                }
                required
                {...form.getInputProps("deamonAddress")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput
                id="port"
                label={
                  <FormattedMessage
                    id={LangKeys.AccountNodeFieldPort}
                    defaultMessage="Port"
                  />
                }
                required
                {...form.getInputProps("port")}
              />
            </Grid.Col>
          </Grid>

          <Group position="right" mt="md">
            <Button size="md" type="submit">
              <FormattedMessage id={LangKeys.Save} defaultMessage="Save" />
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
