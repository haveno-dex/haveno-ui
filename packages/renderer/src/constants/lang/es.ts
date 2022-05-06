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

import { LangKeys } from "./LangKeys";

const LangPackES: { [key in LangKeys]: string } = {
  [LangKeys.AppTitle]: "Bienvenido",
  [LangKeys.AppHeading2]: "Intercambio descentralizado basado en Monero",
  [LangKeys.ConnectingToNetwork]: "Conexión a la red Monero",
  [LangKeys.Header]: "Haveno",
  [LangKeys.WelcomeToHaveno]:
    "Bienvenido a Haveno. El primer intercambio descentralizado basado en Monero del mundo.",
  [LangKeys.AccountTitle]: "Cuenta",
  [LangKeys.AccountSidebarPaymentAccounts]: "Cuentas de pago",
  [LangKeys.AccountSidebarSecurity]: "Seguridad",
  [LangKeys.AccountSidebarWallet]: "Cartera",
  [LangKeys.AccountSidebarBackup]: "Respaldo",
  [LangKeys.AccountSidebarNodeSettings]: "Ajustes",
};

export default LangPackES;
