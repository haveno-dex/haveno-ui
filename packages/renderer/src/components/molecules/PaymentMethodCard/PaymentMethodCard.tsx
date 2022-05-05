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
  Box,
  createStyles,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ReactComponent as MenuIcon } from "@assets/ellipsis.svg";
import { HEIGHT, WIDTH, CurrencyLogos } from "./_constants";
import type { SupportedCurrencies } from "./_types";
import { BodyText } from "@atoms/Typography";
import { useMemo } from "react";

interface PaymentMethodCardProps {
  currency: SupportedCurrencies;
  accountId: string;
}

export function PaymentMethodCard(props: PaymentMethodCardProps) {
  const { accountId, currency } = props;
  const { classes } = useStyles();

  const Logo = useMemo(() => CurrencyLogos[currency].Logo, [currency]);

  return (
    <Box className={classes.card}>
      <Stack>
        <Group position="apart">
          <Group>
            <Logo className={classes.logo} />
            <Text className={classes.name}>{CurrencyLogos[currency].name}</Text>
          </Group>
          <UnstyledButton>
            <MenuIcon className={classes.menuIcon} />
          </UnstyledButton>
        </Group>
        <BodyText heavy sx={{ wordBreak: "break-word" }}>
          {accountId}
        </BodyText>
      </Stack>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    background: theme.colors.white[0],
    border: `solid 1px ${theme.colors.gray[2]}`,
    borderRadius: "0.625rem",
    height: HEIGHT,
    padding: "1.25rem",
    width: WIDTH,
  },
  logo: {
    height: "1.75rem",
    width: "1.75rem",
  },
  name: {
    color: theme.colors.gray[6],
  },
  menuIcon: {
    width: "1rem",
  },
}));
