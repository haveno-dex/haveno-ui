import { FormattedMessage } from "react-intl";
import { Box, createStyles } from "@mantine/core";
import { BodyText, Heading } from "@atoms/Typography";
import { LangKeys } from "@constants/lang";
import { Button } from "@atoms/Buttons";

export function AccountBackupDownload() {
  const { classes } = useStyles();

  return (
    <Box>
      <Heading
        className={classes.heading}
        order={3}
        stringId={LangKeys.AccountBackupDownloadTitle}
      >
        Download your backup file
      </Heading>

      <BodyText
        stringId={LangKeys.AccountBackupDownloadDesc}
        className={classes.desc}
      >
        To be able to restore your Haveno account you need to create a backup
        file of your account. Keep it somewhere safe.
      </BodyText>

      <Button>
        <FormattedMessage
          id={LangKeys.AccountBackupDownloadBtn}
          defaultMessage="Download backup file"
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
