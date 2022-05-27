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

import { joiResolver, useForm } from "@mantine/form";
import { Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { FormattedMessage, useIntl } from "react-intl";
import { useModals } from "@mantine/modals";
import { TextInput } from "@atoms/TextInput";
import type { MyWalletSendFormValues } from "./_hooks";
import { useMyWalletSendFormValidation } from "./_hooks";
import { LangKeys } from "@constants/lang";
import { Button } from "@atoms/Buttons";
import { useSetXmrSend } from "@hooks/haveno/useSetXmrSend";

export function MyWalletSendForm() {
  const { formatMessage } = useIntl();
  const modals = useModals();

  const { mutateAsync: setXmrSend, isLoading: isXmrSendLoading } =
    useSetXmrSend();
  const validation = useMyWalletSendFormValidation();

  const form = useForm<MyWalletSendFormValues>({
    initialValues: {
      amount: "",
      address: "",
      paymentId: "",
    },
    validate: joiResolver(validation),
  });

  const handleFormSubmit = (values: MyWalletSendFormValues) => {
    setXmrSend(values).then((hash: string) => {
      const modalId = modals.openModal({
        title: formatMessage({
          id: LangKeys.MyWalletSendSuccessModalTitle,
          defaultMessage: "Fund are sent!",
        }),
        children: (
          <>
            <Text color="gray">
              <FormattedMessage
                id={LangKeys.MyWalletSendSuccessModalMsg}
                defaultMessage="You’ve sent {amount} XMR to: {hash}"
                values={{
                  amount: values.amount,
                  hash,
                }}
              />
            </Text>

            <Button onClick={() => modals.closeModal(modalId)} mt="md">
              <FormattedMessage
                id={LangKeys.MyWalletSendBackToWallet}
                defaultMessage="Back to Wallet"
              />
            </Button>
          </>
        ),
      });
      form.reset();
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Stack spacing="xl">
        <SimpleGrid cols={2}>
          <TextInput
            id="amount"
            type="number"
            label={
              <FormattedMessage
                id={LangKeys.MyWalletSendFieldAmount}
                defaultMessage="Amount"
              />
            }
            rightSection={
              <Text mr="xl" weight={500} color="gray">
                XMR
              </Text>
            }
            {...form.getInputProps("amount")}
          />
        </SimpleGrid>

        <TextInput
          id="address"
          label={
            <FormattedMessage
              id={LangKeys.MyWalletSendFieldAddress}
              defaultMessage="Address"
            />
          }
          placeholder={formatMessage({
            id: LangKeys.MyWalletSendFieldAddressPlaceholder,
            defaultMessage: "Paste in address here...",
          })}
          {...form.getInputProps("address")}
        />
        <TextInput
          id="paymentId"
          label={
            <FormattedMessage
              id={LangKeys.MyWalletSendFieldPaymentId}
              defaultMessage="Payment ID"
            />
          }
          placeholder={formatMessage({
            id: LangKeys.MyWalletSendFieldPaymentIdPlaceholder,
            defaultMessage: "Paste in address here...",
          })}
          {...form.getInputProps("paymentId")}
        />
      </Stack>

      <Group position="right" mt="xl">
        <Button size="md" type="submit" loading={isXmrSendLoading}>
          <FormattedMessage id={LangKeys.Save} defaultMessage="Save" />
        </Button>
      </Group>
    </form>
  );
}
