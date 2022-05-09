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

import { resolve, sep } from "path";

export default {
  // format
  "*.{js,ts,tsx}": ["yarn format", "yarn license", "eslint --cache --fix"],

  /**
   * Run typechecking if any type-sensitive files was staged
   * @param {string[]} filenames
   * @return {string[]}
   */
  "packages/**/{*.ts,*.tsx,tsconfig.json}": ({ filenames }) => {
    const pathToPackages = resolve(process.cwd(), "packages") + sep;
    return Array.from(
      filenames.reduce((set, filename) => {
        const pack = filename.replace(pathToPackages, "").split(sep)[0];
        set.add(`npm run typecheck:${pack} --if-present`);
        return set;
      }, new Set())
    );
  },
};
