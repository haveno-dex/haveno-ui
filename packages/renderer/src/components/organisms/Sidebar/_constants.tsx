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

import type { ReactNode } from "react";
import { ReactComponent as MarketsIcon } from "@assets/markets.svg";
import { ReactComponent as OffersIcon } from "@assets/offers.svg";
import { ReactComponent as TradesIcon } from "@assets/trades.svg";
import { ReactComponent as NotificationsIcon } from "@assets/notifications.svg";
import { ReactComponent as AccountIcon } from "@assets/account.svg";

export const WIDTH = 210;

interface NavigationLink {
  icon: ReactNode;
  label: string;
  link: string;
}

export const NAV_LINKS = [
  {
    icon: <MarketsIcon />,
    label: "Markets",
    link: "/markets",
  },
  {
    icon: <OffersIcon />,
    label: "My Offers",
    link: "/",
  },
  {
    icon: <TradesIcon />,
    label: "My Trades",
    link: "/",
  },
  {
    icon: <NotificationsIcon />,
    label: "Notifications",
    link: "/",
  },
  {
    icon: <AccountIcon />,
    label: "Account",
    link: "/",
  },
] as Array<NavigationLink>;
