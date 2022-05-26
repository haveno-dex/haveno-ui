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

import { useMutation } from "react-query";
import type { HavenoClient } from "haveno-ts";
import { useHavenoClient } from "./useHavenoClient";

export function useDownloadBackup() {
  const client = useHavenoClient();
  return useMutation(async () => {
    const bytes = await getBackupData(client);
    return window.haveno.downloadBackup({
      bytes,
    });
  });
}

async function getBackupData(client: HavenoClient) {
  const SIZE_INCREMENT = 4096;
  let size = SIZE_INCREMENT;
  let result = new ArrayBuffer(size);
  let numBytes = 0;

  const writableStream = new WritableStream({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    write(chunk: Array<any>) {
      const len = chunk.length;
      if (numBytes + len > size) {
        while (numBytes + len > size) {
          size += SIZE_INCREMENT;
        }
        const largerBuffer = new ArrayBuffer(size);
        new Uint8Array(largerBuffer).set(new Uint8Array(result));
        result = largerBuffer;
      }
      const view = new Uint8Array(result);
      chunk.forEach((byte, index) => {
        view[numBytes + index] = byte;
      });
      numBytes += len;
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  });
  await client.backupAccount(writableStream.getWriter());
  return result.slice(0, numBytes);
}
