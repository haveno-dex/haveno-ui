import { Anchor as MAnchor, createStyles } from "@mantine/core";
import type { AnchorProps as MAnchorProps } from "@mantine/core";

export function Anchor(props: MAnchorProps<"a">) {
  const { classes, cx } = useStyles();

  return <MAnchor {...props} className={cx(props.className, classes.anchor)} />;
}

const useStyles = createStyles((theme) => ({
  anchor: {
    color: theme.colors.blue[6],
  },
}));
