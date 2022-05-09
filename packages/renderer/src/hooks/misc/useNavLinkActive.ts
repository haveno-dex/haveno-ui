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

import { useResolvedPath, useLocation } from "react-router-dom";

interface LinkItemActiveProps {
  to: string;
  caseSensitive?: boolean;
  end?: boolean;
}

/**
 * Determines whether the given route is active.
 * @param   {LinkItemActiveProps} - Hook props.
 * @returns {boolean}
 */
export const useNavLinkActive = ({
  caseSensitive = false,
  end = false,
  to,
}: LinkItemActiveProps) => {
  const location = useLocation();
  const path = useResolvedPath(to);

  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  return (
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(toPathname.length) === "/")
  );
};
