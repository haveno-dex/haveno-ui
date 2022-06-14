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

import { createStyles } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { MarketOffersTradingPair } from "@organisms/MarketOffersTradingPair";

export function useMarketOffersPairModal() {
  const modals = useModals();
  const { classes } = useStyles();

  return {
    openModal: () => {
      const modalId = modals.openModal({
        title: "Select trading pair",
        children: (
          <MarketOffersTradingPair
            onSubmit={() => {
              modals.closeModal(modalId);
            }}
          />
        ),
        withCloseButton: true,
        size: 570,
        classNames: classes,
      });
    },
  };
}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },
  header: {
    marginBottom: 10,
    marginTop: -10,
  },
  body: {
    marginLeft: theme.spacing.sm * -2,
    marginRight: theme.spacing.sm * -2,
    marginBottom: theme.spacing.sm * -2,
  },
}));
