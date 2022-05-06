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

import type { FormEvent } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@constants/routes";

export function Page2() {
  const txtUserRef = useRef<HTMLInputElement>(null);
  const txtPasswdRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!txtUserRef.current || !txtPasswdRef.current) {
      return;
    }

    window.electronStore
      .storeUserinfo({
        username: txtUserRef.current.value,
        password: txtPasswdRef.current.value,
      })
      .then((value) => {
        console.log({ value });
      });
  };

  useEffect(() => {
    if (txtUserRef.current) {
      window.electronStore.storeUserinfo().then((value) => {
        if (txtUserRef.current) {
          txtUserRef.current.value = value.username;
        }
      });
    }
  }, [txtUserRef.current]);

  return (
    <div>
      <h1>Page 2</h1>
      <form onSubmit={handleSubmit}>
        <input ref={txtUserRef} type="text" placeholder="username" />
        <br />
        <input ref={txtPasswdRef} type="password" placeholder="password" />
        <button type="submit">Let me in</button>
      </form>
      <Link to={ROUTES.Home}>Go Home</Link>
    </div>
  );
}
