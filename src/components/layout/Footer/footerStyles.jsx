import { makeStyles } from "@material-ui/core";

export const useFooterStyles = makeStyles((theme) => ({
  copyright: {
    margin: "1.5rem 0 0.5rem 0",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 300,
    opacity: 0.7,
  },
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

    "& .MuiGrid-item": {
      padding: "0",
    },
  },
  mainLink: {
    margin: "0.25rem 2rem 0.25rem 0",
  },
  secondaryLinkContainer: {
    padding: "0 0 0 1rem",
  },
  secondaryLink: {
    margin: "0.125rem 2rem 0.125rem 0",

    "& .MuiTypography-root": {
      fontSize: "1rem",
      fontWeight: 300,
    },
  },
  socialIcon: {
    width: "2.5rem",
    height: "2.5rem",
    margin: "1rem 0.5rem 0 0",
    opacity: 0.7
  },
}));
