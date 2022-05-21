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

const { mergeConfig } = require("vite");
const svgrPlugin = require("vite-plugin-svgr");
const viteConfig = require("../packages/renderer/vite.config");

module.exports = {
  stories: ["../packages/renderer/src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  staticDirs: ["./public"],
  viteFinal: async (config) => {
    // return the customized config
    return mergeConfig(config, {
      root: process.cwd(),
      resolve: viteConfig.resolve,
      plugins: [
        svgrPlugin({
          svgrOptions: {
            icon: true,
          },
        }),
      ],
    });
  },
};
