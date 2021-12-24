import * as React from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  makeStyles,
  useScrollTrigger,
} from "@material-ui/core";

import logoSquare from "../../assets/logo-square.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: "3rem",
    height: "3rem",
    marginRight: "0.5rem",
    borderRadius: "0.125rem 0.5rem 0.125rem 0.5rem",
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    objectFit: "cover",
  },
  tab: {
    ...theme.typography.tab,
  },
  tabsContainer: {
    height: "4rem",
    marginLeft: "auto",
  },
  tabsFlexContainer: {
    height: "100%",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <div className={classes.logoContainer}>
              <img
                className={classes.logo}
                src={logoSquare}
                alt="Material fabric"
              />
            </div>

            <Typography variant="h2" component="p">
              Material fabric
            </Typography>

            <Tabs
              className={classes.tabsContainer}
              classes={{ flexContainer: classes.tabsFlexContainer }}
              component="nav"
            >
              <Tab className={classes.tab} label="Accueil" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="Manifeste" />
              <Tab className={classes.tab} label="Equipe" />
              <Tab className={classes.tab} label="Contact" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
    </>
  );
}
