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

import { Group, createStyles } from "@mantine/core";
import { ReactComponent as MoneroIcon } from "@assets/monero.svg";
import { DetailItem } from "@atoms/DetailItem";

interface MoneroBalanceProps {
  children: React.ReactNode;
}
export function MoneroBalance({ children }: MoneroBalanceProps) {
  const { classes } = useStyles();

  return (
    <Group className={classes.root} spacing={0}>
      <MoneroIcon className={classes.moneroIcon} />
      <Group className={classes.content}>{children}</Group>
    </Group>
  );
}

interface MoneroBalanceDetail {
  label: string;
  children: React.ReactNode;
}

MoneroBalance.Detail = MoneroBalanceDetail;

function MoneroBalanceDetail({ ...props }: MoneroBalanceDetail) {
  return <DetailItem {...props} />;
}

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: theme.radius.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  moneroIcon: {
    height: 32,
    marginLeft: theme.spacing.xs,
    marginRight: theme.spacing.xl,
    width: 32,
  },
  content: {
    gap: theme.spacing.xl * 1.5,
  },
}));
