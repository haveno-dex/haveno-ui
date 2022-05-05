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
import { PaymentMethods, AddPaymentMethod } from "@pages/Account";

export const ROUTES = {
  Home: "/",
  Welcome: "/onboarding/welcome",
  RestoreBackup: "/onboarding/restore-backup",
  SetupAccount: "/onboarding/setup",
  Wallet: "/wallet",
  AccountPaymentMethods: "/account/payment-methods",
  AccountAddPaymentMethod: "/account/payment-methods/add",
};

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.Home} element={<Home />} />
      <Route path={ROUTES.Welcome} element={<Welcome />} />
      <Route path={ROUTES.Wallet} element={<Wallet />} />
      <Route path={ROUTES.AccountPaymentMethods} element={<PaymentMethods />} />
      <Route
        path={ROUTES.AccountAddPaymentMethod}
        element={<AddPaymentMethod />}
      />
    </Routes>
  );
}
