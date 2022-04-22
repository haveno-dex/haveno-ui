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

import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";
import { IntlProvider as ReacIntlProvider } from "react-intl";
import type { LangKeys } from "@src/constants/lang/LangKeys";

const SupportedLocales = {
  EN: "en",
  ES: "es",
};

const DEFAULT_LOCALE = SupportedLocales.EN;

export const IntlProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState<{ [key in LangKeys]: string }>();
  const locale = useMemo(
    () =>
      navigator.language in SupportedLocales
        ? navigator.language
        : DEFAULT_LOCALE,
    [navigator.language]
  );

  useEffect(() => {
    console.log(navigator.language);
    import(/* @vite-ignore */ `../../../constants/lang/${locale}.ts`).then(
      (val) => {
        setMessages(val.default);
      }
    );
  }, [locale]);

  return (
    <ReacIntlProvider locale={locale} messages={messages}>
      {children}
    </ReacIntlProvider>
  );
};
