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

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Space, Stack } from "@mantine/core";
import { LangKeys } from "@constants/lang/LangKeys";
import { CenteredLayout } from "@templates/CenteredLayout";
import { Heading } from "@atoms/Typography";
import Logo from "@assets/logo.svg";
import { useAccountInfo } from "@src/hooks/storage/useGetAccountInfo";
import { ROUTES } from "@constants/routes";
import { showNotification } from "@mantine/notifications";

export function Home() {
  const { data: accountInfo, isSuccess, isError } = useAccountInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      if (!accountInfo) {
        setTimeout(() => navigate(ROUTES.Welcome, { replace: true }), 1000);
      } else {
        setTimeout(() => navigate(ROUTES.Login, { replace: true }), 1000);
      }
    } else if (isError) {
      showNotification({
        color: "red",
        title: "Unable to load account",
        message: "Failed to load account details",
      });
    }
  }, [isSuccess, isError]);

  return (
    <CenteredLayout>
      <Stack align="center" justify="center" sx={{ flex: 1 }}>
        <Stack>
          <Box component="img" src={Logo} alt="Haveno" />
          <Heading
            order={2}
            stringId={LangKeys.AppHeading2}
            sx={{ fontWeight: 500 }}
          >
            Monero based decentralized exchange
          </Heading>
        </Stack>
        <Space h="lg" />
      </Stack>
    </CenteredLayout>
  );
}
