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

import { Stack, Space, Group } from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import Joi from "joi";
import { BodyText, Heading } from "@atoms/Typography";
import { Button, TextButton } from "@atoms/Buttons";
import { Select } from "@atoms/Select";
import { SupportedCurrencies } from "@constants/currencies";

interface SetSetPrimaryFiatProps {
  onGoBack: () => void;
  onNext: (fiat: string) => void;
  value?: string;
}

export function SetPrimaryFiat(props: SetSetPrimaryFiatProps) {
  const { onGoBack, onNext, value } = props;
  const { getInputProps, onSubmit } = useForm<FormValues>({
    schema: joiResolver(schema),
    initialValues: {
      fiat: value ?? "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    onNext(values.fiat);
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Stack>
        <Heading order={1}>
          Choose the fiat currency you want to primarily use.
        </Heading>
        <BodyText size="lg">
          Haveno uses this to show you conversion rates of your funds. You can
          still trade every pair of Monero/Fiat.
        </BodyText>
        <Select
          id="fiat"
          data={CURRENCIES}
          placeholder="Pick one"
          {...getInputProps("fiat")}
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
  fiat: string;
}

const schema = Joi.object({
  fiat: Joi.string().required().messages({
    "string.empty": "Please select a currency",
  }),
});

const CURRENCIES = SupportedCurrencies.filter((cur) => cur.fiat).map((cur) => ({
  label: cur.name,
  value: cur.id,
}));
