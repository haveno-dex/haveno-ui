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

import { createStyles, UnstyledButton } from "@mantine/core";
import { HEIGHT, WIDTH } from "./_constants";
import { ReactComponent as AddIcon } from "@assets/circle-plus.svg";

interface AddCardProps {
  onClick: () => void;
}

export function AddPaymentMethodButton({ onClick }: AddCardProps) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.card} onClick={onClick}>
      <AddIcon />
    </UnstyledButton>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    background: theme.colors.gray[2],
    borderRadius: "0.625rem",
    display: "grid",
    height: HEIGHT,
    opacity: 0.75,
    placeContent: "center",
    transition: "opacity 0.2s",
    width: WIDTH,

    "&:hover": {
      opacity: 1,
    },

    "& svg": {
      height: "1.75rem",
      width: "1.75rem",
    },
  },
}));
