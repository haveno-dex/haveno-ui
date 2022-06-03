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

const { writeFile } = require("fs/promises");
const { execSync } = require("child_process");
const path = require("path");
const electron = require("electron");

/**
 * Returns versions of electron vendors
 * The performance of this feature is very poor and can be improved
 * @see https://github.com/electron/electron/issues/28006
 *
 * @returns {NodeJS.ProcessVersions}
 */
function getVendors() {
  const output = execSync(`${electron} -p "JSON.stringify(process.versions)"`, {
    env: { ELECTRON_RUN_AS_NODE: "1" },
    encoding: "utf-8",
  });

  return JSON.parse(output);
}

function updateVendors() {
  const electronRelease = getVendors();

  const nodeMajorVersion = electronRelease.node.split(".")[0];
  const chromeMajorVersion = electronRelease.v8
    .split(".")
    .splice(0, 2)
    .join("");

  const browserslistrcPath = path.resolve(process.cwd(), ".browserslistrc");

  return Promise.all([
    writeFile(
      "./.electron-vendors.cache.json",
      JSON.stringify(
        {
          chrome: chromeMajorVersion,
          node: nodeMajorVersion,
        },
        null,
        2
      ) + "\n"
    ),

    writeFile(browserslistrcPath, `Chrome ${chromeMajorVersion}\n`, "utf8"),
  ]);
}

updateVendors().catch((err) => {
  console.error(err);
  process.exit(1);
});
