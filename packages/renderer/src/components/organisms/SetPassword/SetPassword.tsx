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

import { Stack, Space, Group, Container } from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import Joi from "joi";
import { BodyText, Heading } from "@atoms/Typography";
import { TextInput } from "@atoms/TextInput";
import { Button, TextButton } from "@atoms/Buttons";
import { LangKeys } from "@constants/lang";

interface SetPasswordProps {
  value: string;
  onGoBack: () => void;
  onNext: (password: string) => void;
}

export function SetPassword(props: SetPasswordProps) {
  const { value, onGoBack, onNext } = props;
  const { getInputProps, onSubmit } = useForm<FormValues>({
    schema: joiResolver(schema),
    initialValues: {
      password: value ?? "",
      repeatPassword: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    onNext(values.password);
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Stack>
        <Container>
          <Heading order={1} stringId={LangKeys.CreatePassword}>
            Create a password
          </Heading>
        </Container>
        <BodyText size="lg">
          All your data is stored locally on your machine. Haveno uses solely a
          password.
        </BodyText>
        <TextInput
          id="password"
          label="Password"
          type="password"
          {...getInputProps("password")}
        />
        <TextInput
          id="repeatPassword"
          label="Repeat password"
          type="password"
          {...getInputProps("repeatPassword")}
        />
        <Space h="lg" />
        <Group position="apart">
          <TextButton onClick={onGoBack}>Go Back</TextButton>
          <Button type="submit">Next</Button>
        </Group>
      </Stack>
    </form>
  );
}

interface FormValues {
  password: string;
  repeatPassword: string;
}

const schema = Joi.object({
  password: Joi.string().min(6).required().messages({
    "string.min": "Password too short",
    "string.empty": "Password can't be empty",
  }),
  repeatPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "Passwords don't match",
    "string.empty": "Please type the password again",
  }),
});
