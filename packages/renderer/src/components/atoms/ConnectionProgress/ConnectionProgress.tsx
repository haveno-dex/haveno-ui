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

import { Box, createStyles, keyframes, Stack } from "@mantine/core";
import { LangKeys } from "@constants/lang/LangKeys";
import { BodyText } from "@atoms/Typography";

export function ConnectionProgress() {
  const { classes } = useStyles();
  return (
    <Stack align="center" justify="center">
      <BodyText size="lg" stringId={LangKeys.ConnectingToNetwork}>
        Connecting to Monero Network
      </BodyText>
      <Box className={classes.container}>
        <Box className={classes.bar} />
      </Box>
    </Stack>
  );
}

const bounce = keyframes({
  "from, to": { transform: "translate3d(0, 0, 0)" },
  "50%": { transform: "translate3d(19rem, 0, 0)" },
});

const useStyles = createStyles((theme) => ({
  container: {
    background: "rgba(17, 17, 17, 0.15)",
    borderRadius: 3,
    height: 6,
    position: "relative",
    width: "23rem",
  },
  bar: {
    animation: `${bounce} 3s ease-in-out infinite`,
    background: theme.colors.blue[5],
    borderRadius: 3,
    height: 6,
    position: "absolute",
    width: "4rem",
  },
}));
