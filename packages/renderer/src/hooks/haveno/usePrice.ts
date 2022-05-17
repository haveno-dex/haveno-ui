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

import { useEffect, useState } from "react";
import { usePrices } from "./usePrices";

export function usePrice(currencyCode?: string) {
  const [data, setData] = useState(0);
  const [error, setError] = useState("");

  const { data: prices, isLoading, isSuccess, error: _error } = usePrices();

  useEffect(() => {
    if (!currencyCode) {
      return;
    }
    if (!isSuccess) {
      setError(_error?.message ?? "Something went wrong");
      return;
    }
    const price = (prices ?? []).find(
      (price) => price.currencyCode === currencyCode
    );
    if (!price) {
      setError("Unknown currency code");
      return;
    }
    setData(price.price);
    setError("");
  }, []);

  return { data, isLoading, isSuccess, error, isError: Boolean(error) };
}
