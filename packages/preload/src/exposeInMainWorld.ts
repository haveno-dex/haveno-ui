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

import { contextBridge } from "electron";

/**
 * Typesafe wrapper for `electron.contextBridge.exposeInMainWorld`.
 * Guarantees that all exposed APIs will comply with contracts.
 * @param key The key to inject the API onto window with. The API will be accessible on window[apiKey].
 * @param api Your API
 *
 * @see https://www.electronjs.org/docs/latest/api/context-bridge#contextbridgeexposeinmainworldapikey-api
 */
export function exposeInMainWorld<T extends keyof Exposed & string>(
  key: T,
  api: Exposed[T]
) {
  return contextBridge.exposeInMainWorld(key, api);
}
