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

import { FormattedMessage } from "react-intl";
import { Grid, Text, Checkbox, createStyles, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Button, TextButton } from "@atoms/Buttons";
import { NumberInput } from "@atoms/TextInput";
import { LangKeys } from "@constants/lang";
import { useOffersFilterState } from "@src/state/offersFilter";
import { transformToForm } from "@src/utils/misc";

interface MarketOffersFilterAccountsFormProps {
  onSubmit?: (values: MarketOffersFilterAccountsForm) => void;
}

export function MarketOffersFilterAccountsForm({
  onSubmit,
}: MarketOffersFilterAccountsFormProps) {
  const { classes } = useStyles();
  const [offersState, setOffersState] = useOffersFilterState();

  const form = useForm<MarketOffersFilterAccountsForm>({
    initialValues: {
      ...initialValues,
      // We only care about the fields in the form and remove other fields.
      // Previously unfilled optional values come as null, so remove those as well.
      ...transformToForm(offersState, initialValues),
    },
  });

  const handleClearFilter = () => {
    form.setValues({ ...initialValues });
  };
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        setOffersState((oldFilter) => ({
          ...oldFilter,
          ...values,
        }));
        onSubmit && onSubmit(values);
      })}
    >
      <Grid mb="xl">
        <Grid.Col span={8}>
          <Text weight={500}>
            <FormattedMessage
              id={LangKeys.MarketFilterAccountLabelSignedAccounts}
              defaultMessage="Signed Accounts"
            />
          </Text>
          <Text color="gray">
            <FormattedMessage
              id={LangKeys.MarketFilterAccountDescSignedAccounts}
              defaultMessage="Only show accounts that have been signed. Please be aware that new accounts need to get the chance to get signed."
            />
          </Text>
        </Grid.Col>

        <Grid.Col sx={{ display: "flex" }} span={4}>
          <Checkbox
            id="signedAccounts"
            radius="sm"
            size="md"
            sx={{ alignItems: "flex-start", marginLeft: "auto" }}
            {...form.getInputProps("signedAccounts", { type: "checkbox" })}
          />
        </Grid.Col>
      </Grid>

      <Grid mb="xl">
        <Grid.Col span={8}>
          <Text weight={500}>
            <FormattedMessage
              id={LangKeys.MarketFilterAccountLabelMinAccountAge}
              defaultMessage="Minimum account age"
            />
          </Text>
          <Text color="gray">
            <FormattedMessage
              id={LangKeys.MarketFilterAccountDescMinAccountAge}
              defaultMessage="Only show trade offers with a minimum account age."
            />
          </Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <NumberInput
            id="minimumAccountAge"
            {...form.getInputProps("minimumAccountAge")}
            rightSection={
              <Text pr="md" color="gray">
                <FormattedMessage
                  id={LangKeys.MarketFilterAccountDays}
                  defaultMessage="Days"
                />
              </Text>
            }
            rightSectionWidth={50}
          />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={8}>
          <Text weight={500}>
            <FormattedMessage
              id={LangKeys.MarketFilterAccountLabelAmountTrades}
              defaultMessage="Minimum amount of trades"
            />
          </Text>
          <Text color="gray">
            <FormattedMessage
              id={LangKeys.MarketFilterAccountDescAmountTrades}
              defaultMessage="Only show trade offers from accounts with a minimum amount of completed trades"
            />
          </Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <NumberInput
            id="minimumTradesAmount"
            {...form.getInputProps("minimumTradesAmount")}
            rightSection={
              <Text mr="md" color="gray">
                <FormattedMessage
                  id={LangKeys.MarketFilterAccountTrades}
                  defaultMessage="Trades"
                />
              </Text>
            }
            rightSectionWidth={65}
          />
        </Grid.Col>
      </Grid>

      <Group position="apart" className={classes.footer}>
        <TextButton
          onClick={handleClearFilter}
          className={classes.clearFilterBtn}
        >
          <FormattedMessage
            id={LangKeys.MarketFilterAccountClearFiltersBtn}
            defaultMessage="Clear filters"
          />
        </TextButton>
        <Button type="submit" flavor="primary">
          <FormattedMessage
            id={LangKeys.MarketFilterAccountClearFiltersBtn}
            defaultMessage="Save filters"
          />
        </Button>
      </Group>
    </form>
  );
}

interface MarketOffersFilterAccountsForm {
  signedAccounts: boolean;
  minimumTradesAmount?: number | null;
  minimumAccountAge?: number | null;
}

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    borderTop: `1px solid ${theme.colors.gray[1]}`,
    marginTop: theme.spacing.xl,
    marginLeft: theme.spacing.xl * -1,
    marginRight: theme.spacing.xl * -1,
  },
  clearFilterBtn: {
    fontSize: theme.spacing.lg,
  },
}));

const initialValues = {
  signedAccounts: false,
  minimumAccountAge: undefined,
  minimumTradesAmount: undefined,
};
