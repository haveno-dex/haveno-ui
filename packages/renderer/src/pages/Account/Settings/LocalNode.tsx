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

import { useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Stack, Grid, Group } from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { StartStopDaemon } from "./StartStopDaemon";
import { useLocalSettingsValidation } from "./_hooks";
import { transformSettingsRequestToForm } from "./_utils";
import type { LocalSettingsFormValues } from "./_types";
import { Button } from "@atoms/Buttons";
import { TextInput } from "@atoms/TextInput";
import { useMoneroNodeSettings } from "@hooks/haveno/useMoneroNodeSettings";
import { useSaveLocalMoneroNode } from "@hooks/haveno/useSaveLocalMoneroNode";
import { LangKeys } from "@constants/lang";

export function LocalNode() {
  const { data: nodeSettings } = useMoneroNodeSettings();
  const { mutate: saveLocalNode, isLoading: isSaving } =
    useSaveLocalMoneroNode();
  const intl = useIntl();

  const validation = useLocalSettingsValidation();

  const { getInputProps, onSubmit, setValues } =
    useForm<LocalSettingsFormValues>({
      initialValues: {
        blockchainLocation: "",
        startupFlags: "",
        bootstrapUrl: "",
        port: "",
      },
      validate: joiResolver(validation),
    });

  const handleSubmit = (values: LocalSettingsFormValues) => {
    saveLocalNode(
      {
        blockchainPath: values.blockchainLocation,
        startupFlags: values.startupFlags.split(/\s|=/),
        bootstrapUrl: values.bootstrapUrl
          ? (new URL(values.bootstrapUrl).port = values.port)
          : "",
      },
      {
        onSuccess: () => {
          showNotification({
            color: "green",
            message: intl.formatMessage({
              id: LangKeys.AccountNodeLocalSaveNotification,
              defaultMessage: "Local node settings saved successfully",
            }),
          });
        },
        onError: (err: Error) => {
          console.dir(err);
          showNotification({
            color: "red",
            message: err.message,
            title: "Something went wrong",
          });
        },
      }
    );
  };

  useEffect(() => {
    if (nodeSettings) {
      setValues(transformSettingsRequestToForm(nodeSettings.toObject()));
    }
  }, [nodeSettings]);

  return (
    <>
      <StartStopDaemon />

      <form onSubmit={onSubmit(handleSubmit)}>
        <Stack spacing="lg">
          <TextInput
            id="blockchainLocation"
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldBlockchainLocation}
                defaultMessage="Blockchain location"
              />
            }
            {...getInputProps("blockchainLocation")}
          />
          <TextInput
            id="startupFlags"
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldDaemonFlags}
                defaultMessage="Daemon startup flags"
              />
            }
            {...getInputProps("startupFlags")}
          />
          <Grid>
            <Grid.Col span={9}>
              <TextInput
                id="bootstrapUrl"
                label={
                  <FormattedMessage
                    id={LangKeys.AccountNodeFieldBootstrapUrl}
                    defaultMessage="Bootstrap URL"
                  />
                }
                {...getInputProps("bootstrapUrl")}
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
                {...getInputProps("port")}
              />
            </Grid.Col>
          </Grid>

          <Group position="right" mt="md">
            <Button
              loaderPosition="right"
              loading={isSaving}
              size="md"
              type="submit"
            >
              <FormattedMessage id={LangKeys.Save} defaultMessage="Save" />
            </Button>
          </Group>
        </Stack>
      </form>
    </>
  );
}
