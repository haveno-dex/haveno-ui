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

import type { MoneroNodeSettings } from "haveno-ts";
import type { LocalSettingsFormValues } from "./_types";

/**
 * Transformes the settings request values to form.
 * @param    {MoneroNodeSettings.AsObject} nodeSettings
 * @returns  {LocalSettingsFormValues}
 */
export function transformSettingsRequestToForm(
  nodeSettings: MoneroNodeSettings.AsObject
): LocalSettingsFormValues {
  return {
    blockchainLocation: nodeSettings?.blockchainPath || "",
    startupFlags: nodeSettings?.startupFlagsList.join(" ") || "",
    bootstrapUrl: transfromBootstrapUrl(nodeSettings?.bootstrapUrl || ""),
    port: transformPort(nodeSettings?.bootstrapUrl || ""),
  };
}

function transformPort(urlAsString: string) {
  try {
    const url = new URL(urlAsString);
    return url.port;
  } catch {
    return "";
  }
}

function transfromBootstrapUrl(urlAsString: string) {
  try {
    const url = new URL(urlAsString);

    // Remove the port from url.
    url.port = "";
    return url.href;
  } catch {
    return "";
  }
}
