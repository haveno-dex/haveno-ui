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
import { BodyText, Heading } from "@atoms/Typography";
import { Button, TextButton } from "@atoms/Buttons";
import { Select } from "@atoms/Select";
import type { FormEvent } from "react";

interface SelectMoneroNodeProps {
  onGoBack: () => void;
  onNext: ({ url, password }: { url: string; password: string }) => void;
}

export function SelectMoneroNode(props: SelectMoneroNodeProps) {
  const { onGoBack, onNext } = props;

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // TODO: fix
    onNext({
      url: "http://192.168.29.59:8080",
      password: "apitest",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Heading order={1}>Select a node</Heading>
        <BodyText size="lg">
          We found a local node running on your machine, it’s recommended to use
          this one. Alternatively you can select one of the curated nodes below
          add another node.
        </BodyText>
        <Select id="fiat" data={[]} placeholder="Pick one" />
        <Space h="lg" />
        <Group position="apart">
          <TextButton onClick={onGoBack}>Go Back</TextButton>
          <Button type="submit">Next</Button>
        </Group>
      </Stack>
    </form>
  );
}
