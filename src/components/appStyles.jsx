import { makeStyles } from "@material-ui/core";

export const useAppStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "calc(100% - 3rem)",
    maxWidth: theme.breakpoints.values.xl,
    margin: "auto",
    padding: "1rem",
  },
}));
