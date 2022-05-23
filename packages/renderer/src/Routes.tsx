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
  Backup,
  Settings,
  PaymentAccounts,
  Security,
  Wallet,
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
        path={ROUTES.PaymentAccounts}
        element={
          <ProtectedRoute>
            <PaymentAccounts />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.NodeSettings}
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.Backup}
        element={
          <ProtectedRoute>
            <Backup />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.Wallet}
        element={
          <ProtectedRoute>
            <Wallet />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.Security}
        element={
          <ProtectedRoute>
            <Security />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.PaymentAccounts}
        element={
          <ProtectedRoute>
            <PaymentMethods />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.AddPaymentAccount}
        element={
          <ProtectedRoute>
            <AddPaymentAccount />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
