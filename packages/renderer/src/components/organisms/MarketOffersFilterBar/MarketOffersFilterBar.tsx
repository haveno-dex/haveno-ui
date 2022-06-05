import { LangKeys } from "@constants/lang";
import { Divider, Group, Button, createStyles } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { MarketOffersTradingPair } from "@organisms/MarketOffersTradingPair";
import { FormattedMessage } from "react-intl";

export function MarketOffersFilterBar() {
  const { classes } = useStyles();
  const modals = useModals();

  const handlePairsBtnClick = () => {
    modals.openConfirmModal({
      title: "Select trading pair",
      children: <MarketOffersTradingPair />,
      size: 570,
    });
  };

  return (
    <Group position="apart" className={classes.root}>
      <Group>
        <Button radius="md" size="md">
          XMR/EUR
        </Button>

        <Divider className={classes.divider} orientation="vertical" />
        <Button
          color="gray"
          variant="outline"
          radius="md"
          size="md"
          classNames={{ root: classes.buttonBold, label: classes.buttonLabel }}
          onClick={handlePairsBtnClick}
        >
          XMR/EUR
        </Button>

        <Button
          color="gray"
          variant="outline"
          radius="md"
          size="md"
          classNames={{ root: classes.buttonBold, label: classes.buttonLabel }}
        >
          <FormattedMessage
            id={LangKeys.MarketOffersAmount}
            defaultMessage={"Amount"}
          />
        </Button>

        <Button
          color="gray"
          variant="outline"
          radius="md"
          size="md"
          classNames={{ label: classes.buttonLabel }}
        >
          <FormattedMessage
            id={LangKeys.MarketOffersAccountDetails}
            defaultMessage={"Payment method"}
          />
        </Button>

        <Button
          color="gray"
          variant="outline"
          radius="md"
          size="md"
          classNames={{ label: classes.buttonLabel }}
        >
          <FormattedMessage
            id={LangKeys.MarketOffersAccountDetails}
            defaultMessage={"Account details"}
          />
        </Button>
      </Group>

      <Group>
        <Button
          variant="outline"
          color="dark"
          radius="md"
          size="md"
          classNames={{
            root: classes.buttonBold,
          }}
        >
          Show market depth
        </Button>

        <Button radius="md" size="md">
          <FormattedMessage
            id={LangKeys.MarketOffersCreateOffer}
            defaultMessage={"Create Offer"}
          />
        </Button>
      </Group>
    </Group>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: 84,
    padding: 15,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },
  button: {
    borderColor: "#E8E7EC",
  },
  buttonLabel: {
    color: "#111",
  },
  buttonBold: {
    borderWidth: 2,
    borderColor: "#111",
  },
  divider: {
    marginTop: "auto",
    marginBottom: "auto",
    height: 28,
  },
}));
