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

import _ from "lodash";

/**
 * Retrieves the form fields and removes fields that out of form from
 * the given intial values, and removes previously unfilled optional values
 * come as `null` as well.
 *
 * @param  {Record<string, unknown>} param - Form values.
 * @param  {Record<string, unknown>} initialValues - Form initial values.
 * @return {Record<string, unknown>}
 */
export const transformToForm = (
  obj: Record<string, unknown>,
  initialValues: Record<string, unknown>
): Record<string, unknown> => {
  return _.pickBy(
    obj,
    (val, key) => val !== null && Object.keys(initialValues).includes(key)
  );
};
