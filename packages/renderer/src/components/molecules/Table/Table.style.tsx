import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  primary: {
    "thead tr": {
      backgroundColor: theme.colors.gray[0],

      th: {
        fontSize: 10,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        borderBottomColor: theme.colors.gray[2],
        color: theme.colors.gray[5],
        fontWeight: 700,
      },
    },
    "tbody tr": {
      td: {
        borderBottomColor: theme.colors.gray[2],
      },
    },
  },
}));
