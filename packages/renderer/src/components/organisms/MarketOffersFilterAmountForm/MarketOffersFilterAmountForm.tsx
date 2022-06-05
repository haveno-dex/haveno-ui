import { TextInput } from "@atoms/TextInput";
import { Box, Grid, Text } from "@mantine/core";
import { useForm } from "@mantine/hooks";

export function MarketOffersFilterAmountForm() {
  const form = useForm({
    initialValues: {
      minAmountFrom: null,
      minAmountTo: null,
      maxAmountFrom: null,
      maxAmountTo: null,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values: MarketOffersFilterAmountFormValues) =>
        console.log(values)
      )}
    >
      <Grid>
        <Grid.Col span={8}>
          <Text weight={500}>Minimum amount</Text>
          <Text color="gray">Set the minimum amount you want to buy.</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            id={"minAmountFrom"}
            {...form.getInputProps("minAmountFrom")}
            rightSection={
              <Text mr="xl" color="gray">
                EUR
              </Text>
            }
            mb="lg"
          />
          <TextInput
            id={"minAmountTo"}
            {...form.getInputProps("minAmountTo")}
            rightSection={
              <Text mr="xl" color="gray">
                XMR
              </Text>
            }
          />
        </Grid.Col>
      </Grid>

      <Grid mt="xl">
        <Grid.Col span={8}>
          <Text weight={500}>Maximum amount</Text>
          <Text color="gray">Set the maximum amount you want to buy.</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            id={"maxAmountFrom"}
            {...form.getInputProps("maxAmountFrom")}
            rightSection={
              <Text mr="xl" color="gray">
                XMR
              </Text>
            }
            mb="lg"
          />
          <TextInput
            id={"maxAmountTo"}
            {...form.getInputProps("maxAmountTo")}
            rightSection={
              <Text mr="xl" color="gray">
                EUR
              </Text>
            }
          />
        </Grid.Col>
      </Grid>
    </form>
  );
}

interface MarketOffersFilterAmountFormValues {
  maxAmountTo: string;
  maxAmountFrom: string;
  minAmountTo: string;
  minAmountFrom: string;
}
