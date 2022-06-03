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

const fsPromise = require("fs/promises");
const glob = require("glob");

const DIVIDER = "=".repeat(77);

/**
 * Returns the list of source files which require a license header
 * @param {number} year - Copyright year
 * @param {string} owner - Copyright owner
 * @returns {string}
 */
const fnLicense = (year, owner) =>
  `// ${DIVIDER}
 Copyright ${year} ${owner}

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
${DIVIDER}`
    .replace(/\n/g, "\n// ")
    .replace(/ +\n/g, "\n");

async function main() {
  console.log("Checking copyright headers...");
  const licenseHeader = fnLicense(new Date().getFullYear(), "Haveno");
  const files = await getFiles([
    "{packages,scripts,tests,types,.storybook}/**/*.{js,jsx,ts,tsx}",
    "*.{js,ts,mjs}",
  ]);
  await Promise.all(
    files.map(async (file) => {
      let contents = (await fsPromise.readFile(file)).toString("utf-8");
      if (contents.startsWith(licenseHeader)) {
        // license exists
        return;
      }
      if (contents.startsWith("#!")) {
        // script; skip
        return;
      }
      const lines = contents.split("\n");
      const index = lines.findIndex((line) =>
        /\/\/ {2}Copyright (\d{4}) (.+)/.test(line)
      );
      if (index === 1) {
        // if the copyright is on line #2
        // remove the header
        while (lines[0].startsWith("//")) {
          lines.shift();
        }
        console.log("updating the license header in", file);
        contents = `${licenseHeader}\n${lines.join("\n")}`;
      } else {
        console.log("adding license header to", file);
        contents = `${licenseHeader}\n\n${contents}`;
      }
      await fsPromise.writeFile(file, contents);
    })
  );
}

/**
 * Returns the list of source files which require a license header
 * @param {Array<string>} patterns - glob patterns
 * @return {Promise<Array<string>>}
 */
async function getFiles(patterns) {
  const files = new Set();
  await Promise.all(
    patterns.map(
      (pattern) =>
        new Promise((resolve, reject) => {
          glob(
            pattern,
            {
              dot: true,
              ignore: ["**/dist/**/*"],
            },
            (err, paths) => {
              if (err) {
                return reject(err);
              }
              paths.map((path) => files.add(path));
              resolve();
            }
          );
        })
    )
  );
  return [...files];
}

main();
