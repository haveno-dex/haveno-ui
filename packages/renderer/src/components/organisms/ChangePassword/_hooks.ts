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

import { LangKeys } from "@constants/lang";
import Joi from "joi";
import { useIntl } from "react-intl";
import type { ChangePasswordFormValues } from "./_types";

const MIN_PASSWORD_CHARS = 8;

const getPasswordRegex = () => {
  return RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${MIN_PASSWORD_CHARS},})`,
    "i"
  );
};

export const useAccountSecurityFormSchema = () => {
  const { formatMessage } = useIntl();

  return Joi.object<ChangePasswordFormValues>({
    newPassword: Joi.string()
      .required()
      .regex(getPasswordRegex())
      .options({
        messages: {
          "string.pattern.base": formatMessage({
            id: LangKeys.AccountSecurityFieldPasswordFormatMsg,
            defaultMessage: "This password is too weak",
          }),
        },
      }),
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref("newPassword"))
      .messages({
        "any.only": formatMessage({
          id: LangKeys.AccountSecurityFieldRepeatPasswordMatchMsg,
          defaultMessage: "Passwords don't match",
        }),
      }),
    currentPassword: Joi.string()
      .required()
      .label(
        formatMessage({
          id: LangKeys.AccountSecurityFieldCurrentPassword,
          defaultMessage: "Current password",
        })
      ),
  });
};
