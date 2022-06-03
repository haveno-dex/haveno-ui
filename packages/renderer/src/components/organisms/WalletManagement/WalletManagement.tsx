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

import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useForm } from "@mantine/hooks";
import { Group, Space, Stack } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { SeedPhrase } from "./SeedPhrase";
import { Button } from "@atoms/Buttons";
import { PasswordInput } from "@atoms/PasswordInput";
import { useValidatePassword } from "@hooks/haveno/useValidatePassword";
import { LangKeys } from "@constants/lang";

export function WalletManagement() {
  const [isRevealed, setRevealed] = useState(false);
  const { getInputProps, onSubmit, values, reset } = useForm<FormValues>({
    initialValues: {
      password: "",
    },
  });

  const { refetch: validatePassword } = useValidatePassword(
    {
      password: values.password,
    },
    {
      enabled: false,
    }
  );

  const handleSubmit = () => {
    validatePassword().then(({ data: isValidPassword }) => {
      if (isValidPassword) {
        setRevealed(true);
        reset();
      } else {
        setRevealed(false);
        showNotification({
          color: "red",
          title: "Invalid password",
          message: "Please check your password",
        });
      }
    });
  };

  return (
    <Stack>
      {isRevealed ? (
        <Stack>
          <SeedPhrase />
          <Space h="lg" />
          <Group position="left">
            <Button
              type="submit"
              onClick={() => {
                setRevealed(false);
              }}
            >
              Hide Seed Phrase
            </Button>
          </Group>
        </Stack>
      ) : (
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack>
            <Space h="sm" />
            <PasswordInput
              autoFocus
              id="password"
              required
              label={
                <FormattedMessage
                  id={LangKeys.AccountWalletPassword}
                  defaultMessage="Password"
                />
              }
              {...getInputProps("password")}
            />
            <Space h="lg" />
            <Group position="right">
              <Button type="submit" disabled={values.password ? false : true}>
                Reveal Seed Phrase
              </Button>
            </Group>
          </Stack>
        </form>
      )}
    </Stack>
  );
}

interface FormValues {
  password: string;
}
