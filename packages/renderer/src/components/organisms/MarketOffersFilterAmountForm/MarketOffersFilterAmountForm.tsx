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
import { createStyles, Grid, Group, Text } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { NumberInput } from "@atoms/TextInput";
import { Button, TextButton } from "@atoms/Buttons";
import { useOffersFilterState } from "@src/state/offersFilter";
import { transformToForm } from "@utils/misc";
import { LangKeys } from "@constants/lang";

interface MarketOffersFilterAmountFormProps {
  onSubmit?: (values: MarketOffersFilterAmountFormValues) => void;
}

export function MarketOffersFilterAmountForm({
  onSubmit,
}: MarketOffersFilterAmountFormProps) {
  const { classes } = useStyles();
  const [offersState, setOffersState] = useOffersFilterState();

  const form = useForm<MarketOffersFilterAmountFormValues>({
    initialValues: {
      ...initialValues,
      // We only care about the fields in the form and remove other fields.
      // Previously unfilled optional values come as null, so remove those as well.
      ...transformToForm(offersState, initialValues),
    },
  });

  const handleCreateFilter = () => {
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
      <Grid>
        <Grid.Col span={8}>
          <Text weight={500}>
            <FormattedMessage
              id={LangKeys.MarketAmountFilterFieldMinAmountTrades}
              defaultMessage="Minimum amount of trades"
            />
          </Text>
          <Text color="gray">
            <FormattedMessage
              id={LangKeys.MarketAmountFilterFieldMinAmountTradesDesc}
              defaultMessage="Set the minimum amount you want to buy."
            />
          </Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <NumberInput
            id="minAmountFrom"
            rightSection={
              <Text color="gray" pr="sm">
                EUR
              </Text>
            }
            rightSectionWidth={45}
            mb="lg"
            {...form.getInputProps("minimumBaseCurrencyAmount")}
          />
          <NumberInput
            id="minAmountTo"
            rightSection={
              <Text pr="sm" color="gray">
                XMR
              </Text>
            }
            rightSectionWidth={45}
            {...form.getInputProps("minimumCryptoAmount")}
          />
        </Grid.Col>
      </Grid>

      <Grid mt="xl">
        <Grid.Col span={8}>
          <Text weight={500}>
            <FormattedMessage
              id={LangKeys.MarketAmountFilterFieldMaxAmount}
              defaultMessage="Maximum amount"
            />
          </Text>
          <Text color="gray">
            <FormattedMessage
              id={LangKeys.MarketAmountFilterFieldMaxAmountDesc}
              defaultMessage="Set the maximum amount you want to buy."
            />
          </Text>
        </Grid.Col>{" "}
        <Grid.Col span={4}>
          <NumberInput
            id="maxAmountFrom"
            {...form.getInputProps("maximumCryptoAmount")}
            rightSection={
              <Text pr="sm" color="gray">
                XMR
              </Text>
            }
            rightSectionWidth={45}
            mb="lg"
          />
          <NumberInput
            id="maxAmountTo"
            {...form.getInputProps("maximumBaseCurrencyAmount")}
            rightSection={
              <Text pr="sm" color="gray">
                EUR
              </Text>
            }
            rightSectionWidth={45}
          />
        </Grid.Col>
      </Grid>

      <Group position="apart" className={classes.footer}>
        <TextButton
          onClick={handleCreateFilter}
          className={classes.clearFilterBtn}
        >
          <FormattedMessage
            id={LangKeys.MarketAmountFilterAmountClearFiltersBtn}
            defaultMessage="Clear filters"
          />
        </TextButton>
        <Button type="submit" flavor="primary">
          <FormattedMessage
            id={LangKeys.MarketAmountFilterAmountSaveBtn}
            defaultMessage="Save filters"
          />
        </Button>
      </Group>
    </form>
  );
}

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.colors.gray[1]}`,
    marginLeft: theme.spacing.xl * -1,
    marginRight: theme.spacing.xl * -1,
    marginTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
  },
  clearFilterBtn: {
    fontSize: theme.spacing.lg,
  },
}));

interface MarketOffersFilterAmountFormValues {
  minimumCryptoAmount?: number | null;
  minimumBaseCurrencyAmount?: number | null;
  maximumCryptoAmount?: number | null;
  maximumBaseCurrencyAmount?: number | null;
}

const initialValues = {
  minimumCryptoAmount: undefined,
  minimumBaseCurrencyAmount: undefined,
  maximumCryptoAmount: undefined,
  maximumBaseCurrencyAmount: undefined,
};
