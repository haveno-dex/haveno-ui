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

import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { AppProviders } from "@atoms/AppProviders";
import { ReactComponent as CloudIcon } from "@assets/setting-cloud.svg";
import { ReactComponent as ServerIcon } from "@assets/setting-server.svg";
import { NodeConnectSwitch } from ".";

describe("molecules::NodeConnectSwitch", () => {
  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <NodeConnectSwitch>
          <NodeConnectSwitch.Method
            active={true}
            current={true}
            tabKey="local-node"
            label="Local Node"
            icon={<ServerIcon width="32px" height="62px" />}
          >
            Local Node Content
          </NodeConnectSwitch.Method>

          <NodeConnectSwitch.Method
            tabKey="remote-node"
            label="Remote Node"
            icon={<CloudIcon width="58px" height="54px" />}
            active={false}
            current={false}
          >
            Remote Node Content
          </NodeConnectSwitch.Method>
        </NodeConnectSwitch>
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("pre-renders active tab", () => {
    const { unmount } = render(
      <AppProviders>
        <NodeConnectSwitch active="local-node">
          <NodeConnectSwitch.Method
            current
            tabKey="local-node"
            label="Local Node"
            icon={<ServerIcon width="32px" height="62px" />}
          >
            Local Node Content
          </NodeConnectSwitch.Method>

          <NodeConnectSwitch.Method
            tabKey="remote-node"
            label="Remote Node"
            icon={<CloudIcon width="58px" height="54px" />}
          >
            Remote Node Content
          </NodeConnectSwitch.Method>
        </NodeConnectSwitch>
      </AppProviders>
    );
    expect(screen.queryByText("Local Node Content")).toBeInTheDocument();
    unmount();
  });

  it("clicking a tab reveals its contents", () => {
    const { unmount } = render(
      <AppProviders>
        <NodeConnectSwitch>
          <NodeConnectSwitch.Method
            current
            tabKey="local-node"
            label="Local Node"
            icon={<ServerIcon width="32px" height="62px" />}
          >
            Local Node Content
          </NodeConnectSwitch.Method>

          <NodeConnectSwitch.Method
            tabKey="remote-node"
            label="Remote Node"
            icon={<CloudIcon width="58px" height="54px" />}
          >
            Remote Node Content
          </NodeConnectSwitch.Method>
        </NodeConnectSwitch>
      </AppProviders>
    );
    const tabs = screen.queryAllByRole("tab");
    expect(tabs).toHaveLength(2);
    expect(screen.queryByText("Remote Node Content")).not.toBeInTheDocument();
    fireEvent.click(tabs[1]);
    expect(screen.queryByText("Remote Node Content")).toBeInTheDocument();
    unmount();
  });
});
