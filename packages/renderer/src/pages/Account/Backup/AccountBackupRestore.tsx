import { Box, createStyles } from "@mantine/core";
import { BodyText, Heading } from "@atoms/Typography";
import { LangKeys } from "@constants/lang";
import { Button } from "@atoms/Buttons";
import { FormattedMessage } from "react-intl";

export function AccountRestoreDownload() {
  const { classes } = useStyles();

  return (
    <Box>
      <Heading
        order={3}
        stringId={LangKeys.AccountBackupRestoreTitle}
        className={classes.heading}
      >
        Restore an existing backup file
      </Heading>

      <BodyText
        stringId={LangKeys.AccountBackupRestoreDesc}
        className={classes.desc}
      >
        When you restore an existing backup file of your Haveno account, you
        will lose the account you’re using currently. Please use with caution.
      </BodyText>

      <Button flavor="neutral">
        <FormattedMessage
          id={LangKeys.AccountBackupRestoreBtn}
          defaultMessage="Restore backup"
        />
      </Button>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing.md,
  },
  desc: {
    marginBottom: theme.spacing.lg,
  },
}));
