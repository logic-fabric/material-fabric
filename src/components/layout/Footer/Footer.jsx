import { Typography } from "@material-ui/core";
import { useFooterStyles } from "./footerStyles";

export function Footer() {
  const classes = useFooterStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <Typography>Example Footer</Typography>
      </div>
    </footer>
  );
}
