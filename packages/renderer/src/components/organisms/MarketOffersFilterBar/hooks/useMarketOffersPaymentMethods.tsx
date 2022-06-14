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
import { MarketOffersFilterPaymentMethods } from "@organisms/MarketOffersFilterPaymentMethods";

export function useMarketOffersPaymentMethods() {
  const modals = useModals();
  const { classes } = useStyles();

  return {
    openModal: () => {
      modals.openModal({
        title: "Filter on payment methods",
        children: <MarketOffersFilterPaymentMethods />,
        size: 970,
        withCloseButton: true,
        classNames: classes,
      });
    },
  };
}

const useStyles = createStyles((theme) => ({
  root: {
    padding: "0 !important",
  },
  modal: {
    padding: "0 !important",
  },
  title: {
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },
  header: {
    padding: "12px 20px",
    margin: 0,
  },
}));
