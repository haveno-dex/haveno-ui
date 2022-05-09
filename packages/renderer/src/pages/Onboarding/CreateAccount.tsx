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

import { Stack, Container } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { CenteredLayout } from "@templates/CenteredLayout";
import { ROUTES } from "@constants/routes";
import { CONTENT_MAX_WIDTH } from "./_constants";
import { useCreateAccount } from "@src/hooks/storage/useCreateAccount";
import { useState } from "react";
import { SetPassword } from "@organisms/SetPassword";
import { SetPrimaryFiat } from "@organisms/SetPrimaryFiat";
import { SelectMoneroNode } from "@organisms/SelectMoneroNode";
import { ReadyToUse } from "@molecules/ReadyToUse";

enum Steps {
  CreatePassword = "CreatePassword",
  SetFiat = "SetFiat",
  SelectNode = "SelectNode",
  Completed = "Completed",
}

export function CreateAccount() {
  const [step, setStep] = useState<Steps>(Steps.CreatePassword);
  const [password, setPassword] = useState("");
  const [fiat, setFiat] = useState("");
  const navigate = useNavigate();
  const { mutate: createAccount } = useCreateAccount();

  const handleSetPassword = (value: string) => {
    setPassword(value);
    setStep(Steps.SetFiat);
  };

  const handleSetFiat = (value: string) => {
    setFiat(value);
    setStep(Steps.SelectNode);
  };

  const handleCreateAccount = (moneroNode: {
    url: string;
    password: string;
  }) => {
    createAccount(
      {
        moneroNode: moneroNode.url,
        password,
        primaryFiat: fiat,
      },
      {
        onSuccess: () => setStep(Steps.Completed),
      }
    );
  };

  return (
    <CenteredLayout showHeader>
      <Stack align="center" justify="center" sx={{ flex: 1 }}>
        <Container size={CONTENT_MAX_WIDTH}>
          {step === Steps.CreatePassword && (
            <SetPassword
              value={password}
              onGoBack={() => navigate(ROUTES.Welcome)}
              onNext={handleSetPassword}
            />
          )}

          {step === Steps.SetFiat && (
            <SetPrimaryFiat
              value={fiat}
              onGoBack={() => setStep(Steps.CreatePassword)}
              onNext={handleSetFiat}
            />
          )}

          {step === Steps.SelectNode && (
            <SelectMoneroNode
              onGoBack={() => setStep(Steps.SetFiat)}
              onNext={handleCreateAccount}
            />
          )}

          {step === Steps.Completed && (
            <ReadyToUse
              onSubmit={() => navigate(ROUTES.AccountPaymentAccounts)}
            />
          )}
        </Container>
      </Stack>
    </CenteredLayout>
  );
}
