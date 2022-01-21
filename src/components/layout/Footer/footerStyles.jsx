import { makeStyles } from "@material-ui/core";

export const useFooterStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    color: "white",
    background: theme.palette.primary.dark,
  },
  footerContent: {
    width: "calc(100% - 3rem)",
    maxWidth: theme.breakpoints.values.xl,
    margin: "auto",
    padding: "1rem 0",
  },
}));
