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

import Joi from "joi";
import { joiResolver, useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { Container, Group, Space, Stack } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { CONTENT_MAX_WIDTH } from "./_constants";
import { useLogin } from "@hooks/session/useLogin";
import { CenteredLayout } from "@templates/CenteredLayout";
import { BodyText, Heading } from "@atoms/Typography";
import { Button } from "@atoms/Buttons";
import { PasswordInput } from "@atoms/PasswordInput";
import { ROUTES } from "@constants/routes";

export function Login() {
  const { mutate: login } = useLogin();
  const navigate = useNavigate();

  const { getInputProps, onSubmit } = useForm<FormValues>({
    schema: joiResolver(schema),
    initialValues: {
      password: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    login(values, {
      onSuccess: () => {
        navigate(ROUTES.Markets, { replace: true });
      },
      onError: (err) => {
        showNotification({
          title: "Login failed",
          message: err.message,
          color: "red",
        });
      },
    });
  };

  return (
    <CenteredLayout showHeader size={CONTENT_MAX_WIDTH}>
      <Stack align="center" justify="center" sx={{ flex: 1 }}>
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack>
            <Container>
              <Heading order={1}>Login to Haveno</Heading>
            </Container>
            <BodyText size="lg">
              All your data is stored locally on your machine. Haveno uses
              solely a password.
            </BodyText>
            <Space h="lg" />
            <PasswordInput
              aria-label="Password"
              id="password"
              label="Password"
              {...getInputProps("password")}
            />
            <Space h="lg" />
            <Group position="apart">
              <Button type="submit">Login</Button>
            </Group>
          </Stack>
        </form>
      </Stack>
    </CenteredLayout>
  );
}

interface FormValues {
  password: string;
}

const schema = Joi.object({
  password: Joi.string().min(6).required().messages({
    "string.min": "Password too short",
    "string.empty": "Password can't be empty",
  }),
});
