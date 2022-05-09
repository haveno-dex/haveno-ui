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
import { ROUTES } from "@constants/routes";
import { ProtectedRoute } from "@atoms/ProtectedRoute";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { CreateAccount, Welcome } from "@pages/Onboarding";
import {
  AccountBackup,
  AccountNodeSettings,
  AccountPaymentAccounts,
  AccountSecurity,
  AccountWallet,
  AddPaymentAccount,
  PaymentMethods,
} from "@pages/Account";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.Home} element={<Home />} />
      <Route path={ROUTES.Login} element={<Login />} />
      <Route path={ROUTES.Welcome} element={<Welcome />} />
      <Route path={ROUTES.CreateAccount} element={<CreateAccount />} />
      <Route
        path={ROUTES.AccountPaymentAccounts}
        element={
          <ProtectedRoute>
            <AccountPaymentAccounts />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.AccountNodeSettings}
        element={
          <ProtectedRoute>
            <AccountNodeSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.AccountBackup}
        element={
          <ProtectedRoute>
            <AccountBackup />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.AccountWallet}
        element={
          <ProtectedRoute>
            <AccountWallet />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.AccountSecurity}
        element={
          <ProtectedRoute>
            <AccountSecurity />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.AccountPaymentAccounts}
        element={
          <ProtectedRoute>
            <PaymentMethods />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.AccountAddPaymentAccount}
        element={
          <ProtectedRoute>
            <AddPaymentAccount />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
