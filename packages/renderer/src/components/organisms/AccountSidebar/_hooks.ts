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

import { LangKeys } from "@constants/lang";
import { ROUTES } from "@constants/routes";
import React from "react";
import { useIntl } from "react-intl";

export interface AccountSidebarItem {
  label: string;
  route: string;
}

export const useGetAccountSidebarMenu = () => {
  const intl = useIntl();

  return React.useMemo(
    () => [
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarPaymentAccounts,
          defaultMessage: "Payment Accounts",
        }),
        route: ROUTES.PaymentAccounts,
      },
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarNodeSettings,
          defaultMessage: "Node Settings",
        }),
        route: ROUTES.NodeSettings,
      },
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarSecurity,
          defaultMessage: "Security",
        }),
        route: ROUTES.Security,
      },
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarWallet,
          defaultMessage: "Wallet",
        }),
        route: ROUTES.Wallet,
      },
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarBackup,
          defaultMessage: "Backup",
        }),
        route: ROUTES.Backup,
      },
    ],
    []
  );
};
