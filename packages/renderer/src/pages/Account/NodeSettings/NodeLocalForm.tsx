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

import { Box, Stack, Grid, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Button } from "@atoms/Buttons";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import { TextInput } from "@atoms/TextInput";

export function NodeLocalForm() {
  const form = useForm({
    initialValues: {
      blockchainLocation: "",
      startupFlags: "",
      deamonAddress: "",
      port: "",
    },
  });

  return (
    <Box>
      <NodeLocalStopDeamon />

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack spacing={"lg"}>
          <TextInput
            id={"blockchainLocation"}
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldBlockchainLocation}
                defaultMessage={"Blockchain location"}
              />
            }
            {...form.getInputProps("blockchainLocation")}
          />
          <TextInput
            id={"deamonFlags"}
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldDeamonFlags}
                defaultMessage={"Deamon startup flags"}
              />
            }
            {...form.getInputProps("startupFlags")}
          />
          <Grid>
            <Grid.Col span={9}>
              <TextInput
                id={"deamonAddress"}
                label={
                  <FormattedMessage
                    id={LangKeys.AccountNodeFieldDeamonAddress}
                    defaultMessage={"Deamon Address"}
                  />
                }
                {...form.getInputProps("deamonAddress")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput
                id={"port"}
                label={
                  <FormattedMessage
                    id={LangKeys.AccountNodeFieldPort}
                    defaultMessage={"Port"}
                  />
                }
                {...form.getInputProps("port")}
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </form>
    </Box>
  );
}

function NodeLocalStopDeamon() {
  const { classes } = useStyles();

  return (
    <div className={classes.actions}>
      <Button flavor={"neutral"}>
        <FormattedMessage
          id={LangKeys.AccountNodeStopDeamon}
          defaultMessage={"Stop deamon"}
        />
      </Button>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  actions: {
    marginBottom: theme.spacing.xl,
  },
}));
