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

import { Routes, Route } from "react-router-dom";
import { Home, Welcome } from "@pages/Onboarding";
import { Wallet } from "@pages/Wallet";
import { AccountPaymentAccounts } from "@pages/Account/AccountPaymentAccounts";
import { AccountNodeSettings } from "@pages/Account/AccountNodeSettings";
import { AccountBackup } from "@pages/Account/AccountBackup";
import { AccountWallet } from "@pages/Account/AccountWallet";
import { AccountSecurity } from "@pages/Account/Security";
import { ROUTES } from "@constants/routes";
import { PaymentMethods } from "@pages/Account";
import { AddPaymentMethod } from "@organisms/AddPaymentMethod";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.Home} element={<Home />} />
      <Route path={ROUTES.Welcome} element={<Welcome />} />
      <Route path={ROUTES.Wallet} element={<Wallet />} />
      <Route path={ROUTES.Account}>
        <Route
          path={ROUTES.AccountPaymentAccounts}
          element={<AccountPaymentAccounts />}
        />
        <Route
          path={ROUTES.AccountNodeSettings}
          element={<AccountNodeSettings />}
        />
        <Route path={ROUTES.AccountBackup} element={<AccountBackup />} />
        <Route path={ROUTES.AccountWallet} element={<AccountWallet />} />
        <Route path={ROUTES.AccountSecurity} element={<AccountSecurity />} />
        <Route
          path={ROUTES.AccountPaymentMethods}
          element={<PaymentMethods />}
        />
        <Route
          path={ROUTES.AccountAddPaymentMethod}
          element={<AddPaymentMethod />}
        />
      </Route>
    </Routes>
  );
}
