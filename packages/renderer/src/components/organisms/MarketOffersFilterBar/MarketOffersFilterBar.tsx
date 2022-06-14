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

import { Divider, Group, createStyles, Text, Box } from "@mantine/core";
import { FormattedMessage, useIntl } from "react-intl";
import { isEmpty } from "lodash";
import {
  useMarketOffersPairModal,
  useMarketOffersPaymentMethods,
  useMarketOffersAmountModal,
  useMarketOffersAccountModal,
} from "./hooks";
import { MarketOffersFilterButton } from "./MarketOffersFilterButton";
import {
  useAccountDetailsLabel,
  useMarketOffersFilterAmountLabel,
} from "./_hooks";
import { LangKeys } from "@constants/lang";
import { ReactComponent as BtcIcon } from "@assets/btc.svg";
import { useOffersFilterState } from "@src/state/offersFilter";
import { ToggleButton } from "@atoms/ToggleButton/ToggleButton";

export function MarketOffersFilterBar() {
  const { formatMessage } = useIntl();
  const { classes } = useStyles();
  const [offersFilter, setOffersFilter] = useOffersFilterState();

  // Market offers pair filter modal.
  const marketOffersPairModal = useMarketOffersPairModal();

  // Market offers payment methods filter modal.
  const marketOffersPaymentMethodsModal = useMarketOffersPaymentMethods();

  // Market offers account filter modal.
  const marketOffersAccountModal = useMarketOffersAccountModal();

  // Market offers amount filter modal.
  const marketOffersAmountModal = useMarketOffersAmountModal();

  const accountDetailsLabel = useAccountDetailsLabel();
  const filterAmountLabel = useMarketOffersFilterAmountLabel();

  // Handles the buy/sell switch change.
  const handleBuySellSwitch = (tabIndex: number) => {
    setOffersFilter((filter) => ({
      ...filter,
      direction: tabIndex === 0 ? "sell" : "buy",
    }));
  };
  const handleParisBtnClick = () => {
    marketOffersPairModal.openModal();
  };
  const handlePaymentMethodsBtnClick = () => {
    marketOffersPaymentMethodsModal.openModal();
  };
  const handleAccountBtnClick = () => {
    marketOffersAccountModal.openModal();
  };
  const handleAmountBtnClick = () => {
    marketOffersAmountModal.openModal();
  };

  return (
    <Group position="apart" className={classes.root}>
      <Group>
        <Group spacing="sm">
          <ToggleButton
            labels={[
              formatMessage(
                {
                  id: LangKeys.MarketOffersSwitchSell,
                  defaultMessage: "Sell {currency}",
                },
                {
                  currency: "XMR",
                }
              ),
              formatMessage(
                {
                  id: LangKeys.MarketOffersSwitchBuy,
                  defaultMessage: "Buy {currency}",
                },
                {
                  currency: "XMR",
                }
              ),
            ]}
            onChange={handleBuySellSwitch}
          />
          <Text color="gray">
            <FormattedMessage
              id={LangKeys.MarketOffersWith}
              defaultMessage="with"
            />
          </Text>
          <MarketOffersFilterButton
            active={!isEmpty(offersFilter.assetCode)}
            onClick={handleParisBtnClick}
          >
            <Box mr="sm">
              <BtcIcon height={17} width={17} />
            </Box>
            {!isEmpty(offersFilter.assetCode) ? (
              offersFilter.assetCode?.toUpperCase()
            ) : (
              <FormattedMessage
                id={LangKeys.MarketOffersCurrency}
                defaultMessage="Currency"
              />
            )}
          </MarketOffersFilterButton>
        </Group>
        <Divider className={classes.divider} orientation="vertical" />

        <MarketOffersFilterButton
          active={!!filterAmountLabel}
          onClick={handleAmountBtnClick}
        >
          {filterAmountLabel || (
            <FormattedMessage
              id={LangKeys.MarketOffersAmount}
              defaultMessage="Amount"
            />
          )}
        </MarketOffersFilterButton>

        <MarketOffersFilterButton
          active={!isEmpty(offersFilter.paymentMethods)}
          bubbleText={
            isEmpty(offersFilter.paymentMethods)
              ? ""
              : offersFilter?.paymentMethods?.length + ""
          }
          onClick={handlePaymentMethodsBtnClick}
        >
          <FormattedMessage
            id={LangKeys.MarketOffersPaymentMethod}
            defaultMessage="Payment method"
          />
        </MarketOffersFilterButton>

        <MarketOffersFilterButton
          active={!!accountDetailsLabel}
          onClick={handleAccountBtnClick}
        >
          {accountDetailsLabel || (
            <FormattedMessage
              id={LangKeys.MarketOffersAccountDetails}
              defaultMessage="Account details"
            />
          )}
        </MarketOffersFilterButton>
      </Group>

      <Group>
        <Divider className={classes.divider} orientation="vertical" />
        <MarketOffersFilterButton>
          <FormattedMessage
            id={LangKeys.MarketOffersShowMarketDepth}
            defaultMessage="Show market depth"
          />
        </MarketOffersFilterButton>

        <MarketOffersFilterButton variant="filled" color="blue" size="md">
          <FormattedMessage
            id={LangKeys.MarketOffersCreateOffer}
            defaultMessage="Create Offer"
          />
        </MarketOffersFilterButton>
      </Group>
    </Group>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.white,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    minHeight: 84,
    padding: "18px 22px",
  },
  divider: {
    marginBottom: "auto",
    marginTop: "auto",
    height: 28,
  },
}));
