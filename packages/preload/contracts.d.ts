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

/* eslint-disable @typescript-eslint/consistent-type-imports */

interface Exposed {
  readonly nodeCrypto: Readonly<typeof import("./src/nodeCrypto").nodeCrypto>;
  readonly versions: Readonly<typeof import("./src/versions").versions>;
  readonly electronStore: Readonly<typeof import("./src/store").store>;
  readonly haveno: Readonly<typeof import("./src/haveno").store>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window extends Exposed {}
