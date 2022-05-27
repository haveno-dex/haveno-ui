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
import { Box, Button, Group, Stack, Text } from "@mantine/core";
import { LangKeys } from "@constants/lang";
import { Heading } from "@atoms/Typography";
import { AddressCard } from "@molecules/AddressCard/AddressCard";
import { useSetXmrNewSubaddress } from "@hooks/haveno/useSetXmrNewSubaddress";
import { getActiveReceiveAddresses, saveReceiveAddresss } from "./_utils";

export function MyWalletReceive() {
  const { mutateAsync: setXmrNewSubaddress, isLoading: isSetXmrLoading } =
    useSetXmrNewSubaddress();
  const [addresses, setAddresses] = useState<Array<string>>(
    getActiveReceiveAddresses() || []
  );

  const handleGenerateAddressBtn = () => {
    setXmrNewSubaddress().then((newSubaddress: string) => {
      saveReceiveAddresss(newSubaddress);

      const cachedSubaddress = getActiveReceiveAddresses();
      setAddresses(cachedSubaddress);
    });
  };
  return (
    <Box>
      <Heading
        order={4}
        stringId={LangKeys.MyWalletReceiveTitle}
        mb="sm"
        mt="lg"
      >
        Your Address
      </Heading>

      {addresses.length === 0 && (
        <Text mt="xs" color="gray">
          <FormattedMessage
            id={LangKeys.MyWalletReceiveNoAddressesMsg}
            defaultMessage={`You don't have generated address, please generate one.`}
          />
        </Text>
      )}
      <Stack>
        {addresses.map((address) => (
          <AddressCard key={address} address={address} />
        ))}
      </Stack>

      <Group position="right" mt="md">
        <Button
          variant="subtle"
          color="dark"
          size="md"
          type="submit"
          loading={isSetXmrLoading}
          onClick={handleGenerateAddressBtn}
        >
          +{" "}
          <FormattedMessage
            id={LangKeys.MyWalletGenerateAddressBtn}
            defaultMessage="Generate a new sub address"
          />
        </Button>
      </Group>
    </Box>
  );
}
