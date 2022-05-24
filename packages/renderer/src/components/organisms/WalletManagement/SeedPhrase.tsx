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

import {
  createStyles,
  Group,
  List,
  ListItem,
  Space,
  Stack,
} from "@mantine/core";
import { BodyText } from "@atoms/Typography";
import { useXmrSeed } from "@hooks/haveno/useXmrSeed";

export function SeedPhrase() {
  const { classes } = useStyles();
  const { data: xmrseeds, isLoading } = useXmrSeed();
  const seeds = xmrseeds?.split(" ");

  return (
    <Stack>
      <Space h="lg" />
      {isLoading && <BodyText>Loading Wallet Seeds...</BodyText>}
      <List type="ordered" className={classes.container}>
        {seeds?.map((label, index) => (
          <Group key={index} className={classes.background} spacing="sm">
            <ListItem>{label}</ListItem>
          </Group>
        ))}
      </List>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  background: {
    backgroundColor: theme.colors.gray[3],
    borderRadius: "0.5rem",
    flex: "0 30%",
    li: {
      color: theme.colors.gray[6],
    },
    padding: "0.75rem 1rem",
    span: {
      color: theme.colors.gray[9],
    },
    width: "15rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
}));
