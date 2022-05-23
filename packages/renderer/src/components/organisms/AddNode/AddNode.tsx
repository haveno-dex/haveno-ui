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

import { Group, Space, Stack } from "@mantine/core";
import Joi from "joi";
import { joiResolver, useForm } from "@mantine/form";
import { Heading } from "@atoms/Typography";
import { TextInput } from "@atoms/TextInput";
import { PasswordInput } from "@atoms/PasswordInput";
import { Button } from "@atoms/Buttons";

interface AddNodeProps {
  isLoading?: boolean;
  onSubmit: (values: AddNodeFormValues) => void;
  showTitle?: boolean;
}

export function AddNode(props: AddNodeProps) {
  const { isLoading = false, onSubmit, showTitle = true } = props;
  const { getInputProps, onSubmit: onFormSubmit } = useForm<AddNodeFormValues>({
    initialValues: {
      address: "",
      port: "",
      user: "",
      password: "",
    },
    validate: joiResolver(validation),
  });

  const handleSubmit = (values: AddNodeFormValues) => {
    onSubmit(values);
  };

  return (
    <Stack spacing="sm">
      {showTitle && <Heading order={3}>Add a new node</Heading>}
      <form onSubmit={onFormSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            aria-label="Node address"
            id="address"
            label="Node address"
            required
            {...getInputProps("address")}
          />
          <TextInput
            aria-label="Port"
            id="port"
            label="Port"
            required
            {...getInputProps("port")}
          />
          <TextInput
            id="user"
            label="Login (optional)"
            {...getInputProps("user")}
          />
          <PasswordInput
            id="password"
            label="Password (optional)"
            {...getInputProps("password")}
          />
          <Space h="md" />
          <Group position="right">
            <Button loaderPosition="right" loading={isLoading} type="submit">
              Save
            </Button>
          </Group>
        </Stack>
      </form>
    </Stack>
  );
}

export interface AddNodeFormValues {
  address: string;
  port: string;
  user?: string;
  password?: string;
}

const validation = Joi.object<AddNodeFormValues>({
  address: Joi.string().uri({ allowRelative: false }),
  port: Joi.number().port(),
  user: Joi.string().allow("").optional(),
  password: Joi.string().allow("").optional(),
});
