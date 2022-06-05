import { FC } from "react";

export function MarketOffersTradingPair() {
  return (
    <MarketOffersTradingPairBoot>
      <MarketOffersTradingPairLoaded />
    </MarketOffersTradingPairBoot>
  );
}

const MarketOffersTradingPairLoaded: FC = ({ children }) => {
  return <>{children}</>;
};

const MarketOffersTradingPairBoot: FC = ({ children }) => {
  return <>{children}</>;
};
