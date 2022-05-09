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

import { createSession } from "@src/utils/session";
import { useMutation } from "react-query";

interface Variables {
  password: string;
}

export function useLogin() {
  return useMutation<void, Error, Variables>(async (variables: Variables) => {
    const authToken = await window.electronStore.verifyPassword(
      variables.password
    );
    if (!authToken) {
      throw new Error("Invalid password");
    }
    createSession(authToken);
  });
}
