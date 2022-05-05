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
import { Heading, BodyText } from "@atoms/Typography";
import {
  AddPaymentMethodButton,
  PaymentMethodCard,
} from "@molecules/PaymentMethodCard";

interface PaymentMethodsProps {
  onAdd: () => void;
}

export function PaymentMethodList({ onAdd }: PaymentMethodsProps) {
  return (
    <Stack spacing="lg">
      <Stack sx={{ maxWidth: "32rem" }}>
        <Heading order={2}>Your available payment accounts</Heading>
        <BodyText heavy>
          To engage in trades you need payment methods to support these trades.
          The payment methods are stored locally on your device and details are
          only shown to counter parties in trades when needed.
        </BodyText>
      </Stack>
      <Space h="xl" />
      <Group spacing="xl">
        <PaymentMethodCard
          accountId="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
          currency="BTC"
        />
        <PaymentMethodCard accountId="tqTFn5Au4m4GFg7x" currency="ETH" />
        <PaymentMethodCard accountId="112233" currency="EUR" />
        <AddPaymentMethodButton onClick={onAdd} />
      </Group>
    </Stack>
  );
}
