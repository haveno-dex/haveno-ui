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

import { FormattedMessage } from "react-intl";
import { Stack, Box, Group } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { TextInput } from "@atoms/TextInput";
import { LangKeys } from "@constants/lang";
import { Button } from "@atoms/Buttons";
import { useChangePassword } from "@hooks/storage/useChangePassword";
import { useAccountSecurityFormSchema } from "./_hooks";
import type { ChangePasswordFormValues } from "./_types";

export function ChangePassword() {
  const accountSecurityFormSchema = useAccountSecurityFormSchema();
  const { mutate: changePassword } = useChangePassword();

  const form = useForm<ChangePasswordFormValues>({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    schema: joiResolver(accountSecurityFormSchema),
  });

  const handleSubmit = (values: ChangePasswordFormValues) => {
    changePassword(
      {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      },
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
            message: "Password updated successfully",
          });
          form.reset();
        },
      }
    );
  };

  return (
    <Box>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="lg">
          <TextInput
            id="password"
            type="password"
            required
            label={
              <FormattedMessage
                id={LangKeys.AccountSecurityFieldPassword}
                defaultMessage="Password"
              />
            }
            {...form.getInputProps("newPassword")}
          />
          <TextInput
            id="confirmPassword"
            required
            type="password"
            label={
              <FormattedMessage
                id={LangKeys.AccountSecurityFieldRepeatPassword}
                defaultMessage="Repeat new password"
              />
            }
            {...form.getInputProps("confirmPassword")}
          />
          <TextInput
            id="currentPassword"
            type="password"
            required
            label={
              <FormattedMessage
                id={LangKeys.AccountSecurityFieldCurrentPassword}
                defaultMessage="Current password"
              />
            }
            {...form.getInputProps("currentPassword")}
          />
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
