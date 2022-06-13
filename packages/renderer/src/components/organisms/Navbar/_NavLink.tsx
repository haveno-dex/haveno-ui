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

import { Text, createStyles } from "@mantine/core";
import { useMemo } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

interface NavLinkProps {
  activeRoutes: Array<string>;
  label?: string;
  to: string;
  Component?: JSX.Element;
}

export function NavLink(props: NavLinkProps) {
  const { Component, activeRoutes, to, label } = props;
  const location = useLocation();

  const isActive = useMemo(() => {
    let matched = false;
    activeRoutes.forEach((route) => {
      if (matchPath(route, location.pathname)) {
        matched = true;
      }
    });
    return matched;
  }, [activeRoutes, location]);

  const { classes } = useStyles({ isActive });

  return (
    <Link to={to} className={classes.navLink}>
      {Component}
      {label && (
        <Text className={classes.text} color="white" size="xs">
          {label}
        </Text>
      )}
    </Link>
  );
}

const useStyles = createStyles<string, { isActive: boolean }>(
  (theme, { isActive }) => ({
    navLink: {
      alignItems: "center",
      display: "flex",
      height: 64,
      opacity: isActive ? 1 : 0.7,
      position: "relative",
      textDecoration: "none",
      transition: "opacity 0.2s",

      "&:after": {
        background: isActive ? "white" : "none",
        bottom: 0,
        content: '" "',
        height: 3,
        left: 0,
        position: "absolute",
        right: 0,
      },

      "&:hover": {
        opacity: 1,
      },
    },
    text: {
      color: theme.colors.gray[0],
      fontSize: "0.75rem",
      fontWeight: 600,
    },
  })
);
