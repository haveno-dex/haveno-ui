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

import { useMemo } from "react";
import { useResolvedPath, useLocation } from "react-router-dom";

interface LinkItemActiveProps {
  caseSensitive?: boolean;
  end?: boolean;
  to?: string;
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
}: LinkItemActiveProps): boolean => {
  const location = useLocation();
  const path = useResolvedPath(to ?? "");

  const isActive = useMemo(() => {
    if (!to) {
      return false;
    }
    let locationPathName = location.pathname;
    let toPathName = path.pathname;

    if (!caseSensitive) {
      locationPathName = locationPathName.toLowerCase();
      toPathName = toPathName.toLowerCase();
    }

    return (
      locationPathName === toPathName ||
      (!end &&
        locationPathName.startsWith(toPathName) &&
        locationPathName.charAt(toPathName.length) === "/")
    );
  }, [location, path, caseSensitive, end, to]);

  return isActive;
};
