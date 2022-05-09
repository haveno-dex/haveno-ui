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

import { randomBytes, scrypt, timingSafeEqual } from "crypto";
import jwt from "jsonwebtoken";

const SALT_LENGTH = 32;
const KEY_LENGTH = 64;

export async function hashPassword(plainText: string): Promise<string> {
  const salt = randomBytes(SALT_LENGTH).toString("hex");
  return new Promise((resolve, reject) => {
    scrypt(plainText, salt, KEY_LENGTH, (err, derivedKey) => {
      if (err) {
        return reject(err);
      }
      resolve(`${salt}:${derivedKey.toString("hex")}`);
    });
  });
}

export async function verifyPassword(
  plainText: string,
  storedHash: string
): Promise<boolean> {
  const [salt, key] = storedHash.split(":");
  return new Promise((resolve, reject) => {
    const origKey = Buffer.from(key, "hex");
    scrypt(plainText, salt, KEY_LENGTH, (err, derivedKey) => {
      if (err) {
        return reject(err);
      }
      resolve(timingSafeEqual(origKey, derivedKey));
    });
  });
}

interface AuthToken {
  createdAt: number;
  randomStr: string;
}

export async function createAuthToken(
  saltAndPassword: string
): Promise<string> {
  const [randomStr, secret] = saltAndPassword.split(":");
  const token = jwt.sign(
    {
      createdAt: new Date().getTime(),
      randomStr,
    },
    secret
  );
  return token;
}

export async function verifyAuthAuthToken(
  token: string,
  saltAndPassword: string
): Promise<boolean> {
  if (!token) {
    return false;
  }
  const [randomStr, secret] = saltAndPassword.split(":");
  try {
    const payload = jwt.verify(token, secret) as AuthToken;
    return payload.randomStr === randomStr;
  } catch (_ex) {
    return false;
  }
}
