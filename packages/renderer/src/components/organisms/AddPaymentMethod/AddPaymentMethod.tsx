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

import { useEffect, useMemo } from "react";
import { Collapse, Group, Space, Stack } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";
import Joi from "joi";
import { Button } from "@atoms/Buttons";
import { Select } from "@atoms/Select";
import { TextInput } from "@atoms/TextInput";
import { SupportedCurrencies } from "@constants/currencies";
import { PaymentMethods as _PaymentMethods } from "@constants/payment-methods";

export function AddPaymentMethod() {
  const { getInputProps, onSubmit, setFieldValue, values } =
    useForm<FormValues>({
      schema: joiResolver(schema),
      initialValues: {
        currency: "",
        paymentMethod: "",
        accountNumber: "",
      },
    });

  const paymentMethods = useMemo(() => {
    if (!values.currency) {
      return [];
    }
    const currency = SupportedCurrencies.find(
      (curr) => curr.id === values.currency
    );
    if (!currency) {
      return [];
    }

    return Object.entries(_PaymentMethods)
      .filter(([, method]) => currency.paymentMethods.includes(method.id))
      .map(([, method]) => ({
        value: method.id,
        label: method.name,
      }))
      .sort((a, b) => (a.label > b.label ? 1 : -1));
  }, [values?.currency]);

  // TODO @subir
  const handleSubmit = (values: FormValues) => console.log(values);

  useEffect(() => {
    setFieldValue("paymentMethod", "");
  }, [values.currency]);

  useEffect(() => {
    setFieldValue("accountNumber", "");
  }, [values.paymentMethod]);

  return (
    <Stack spacing="lg">
      <form onSubmit={onSubmit(handleSubmit)}>
        <Stack sx={{ maxWidth: "32rem" }}>
          <Select
            data={Currencies}
            id="currency"
            label="Select the currency for your new payment account"
            placeholder="Pick one"
            {...getInputProps("currency")}
          />

          <Collapse in={Boolean(values.currency)}>
            <Select
              creatable
              data={paymentMethods}
              id="paymentMethod"
              label="Select your preferred payment method"
              placeholder="Pick one"
              searchable
              {...getInputProps("paymentMethod")}
            />
          </Collapse>

          <Collapse in={Boolean(values.paymentMethod)}>
            <TextInput
              id="accountNumber"
              label="Account Number"
              {...getInputProps("accountNumber")}
            />
          </Collapse>

          <Group position="right" mt="md">
            <Button type="submit">Save</Button>
          </Group>
        </Stack>
      </form>
      <Space h="xl" />
      <Stack></Stack>
    </Stack>
  );
}

interface FormValues {
  currency: string;
  paymentMethod: string;
  accountNumber: string;
}

const schema = Joi.object<FormValues>({
  currency: Joi.string().required(),
  paymentMethod: Joi.string().required(),
  accountNumber: Joi.string().required(),
});

const Currencies = SupportedCurrencies.map((curr) => ({
  label: curr.name,
  value: curr.id,
}));
