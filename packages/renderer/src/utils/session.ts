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

const SESSION_KEY = "AUTH_TOKEN";

export async function createSession(authToken: string) {
  window.sessionStorage.setItem(SESSION_KEY, authToken);
}

export async function validateSession(): Promise<boolean> {
  const token = window.sessionStorage.getItem(SESSION_KEY);
  if (!token) {
    return false;
  }
  return window.electronStore.verifyAuthToken(token);
}

export async function deleteSession() {
  window.sessionStorage.removeItem(SESSION_KEY);
}
