import { makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles((theme) => ({
  brandContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  button: {
    margin: "0 2rem",
    borderRadius: "2rem",
    color: "white",
    fontWeight: 700,
  },

  drawerButton: {
    margin: "0.5rem 1rem",
    borderRadius: "2rem",
    color: "white",
    fontWeight: 700,
  },
  drawerIconContainer: {
    marginLeft: "auto",
    color: "white",
    fontSize: "2rem",

    "&:hover": {
      background: "transparent",
    },
  },
  drawerItem: {
    opacity: 0.7,

    "&:hover": {
      background: theme.palette.grey100,
    },
  },
  drawerItemSelected: {
    color: "white",
    backgroundColor: `${theme.palette.primary.main} !important`,

    "& .MuiTypography-root": {
      fontSize: "1.35rem",
    },
  },
  logo: {
    width: "100%",
    objectFit: "cover",
  },
  logoContainer: {
    width: "3rem",
    height: "3rem",
    marginRight: "0.5rem",
    borderRadius: "0.125rem 0.5rem 0.125rem 0.5rem",
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      width: "2rem",
      height: "2rem",
      borderRadius: "0.0625rem 0.25rem 0.0625rem 0.25rem",
    },
  },
  logoText: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
  },
  menu: {
    borderRadius: "0.5rem",
    color: "white",
    background: theme.palette.primary.main,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,

    "&.Mui-selected": {
      opacity: 1,
    },

    "&:hover, &.Mui-selected:hover": {
      background: theme.palette.primary.dark,
      opacity: 1,
    },
  },
  menuPopover: {
    transform: "translate(-1.25rem, 2.5rem)",
  },
  tab: {
    ...theme.typography.tab,
    textTransform: "none",

    [theme.breakpoints.down("md")]: {
      minWidth: "120px",
      fontSize: "1.1rem",
    },
  },
  tabActive: {
    fontSize: "1.35rem",
    background: theme.palette.primary.dark,

    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
  },
  tabsContainer: {
    height: "4rem",
    marginLeft: "auto",
  },
  tabsFlexContainer: {
    height: "100%",
  },
  toolbar: {
    width: "calc(100% - 3rem)",
    maxWidth: theme.breakpoints.values.xl,
    margin: "auto",

    [theme.breakpoints.down("md")]: {
      minHeight: "3.5rem",
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,

    [theme.breakpoints.down("md")]: {
      minHeight: "3.5rem",
    },
  },
}));
