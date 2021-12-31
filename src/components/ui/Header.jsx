import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  Menu,
  MenuItem,
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
  },
  tab: {
    ...theme.typography.tab,
    textTransform: "none",
  },
  tabActive: {
    fontSize: "1.35rem",
    background: theme.palette.primary.dark,
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

const TABS_ROUTES = ["/", "/services", "/manifesto", "/about", "/contact"];

export function Header() {
  const classes = useStyles();
  const [activeTabValue, setActiveTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    for (let i = 0; i < TABS_ROUTES.length; i++) {
      if (window.location.pathname === TABS_ROUTES[i] && activeTabValue !== i) {
        setActiveTabValue(i);
      }
    }
    console.log(
      "activeTabValue =",
      activeTabValue,
      "| ROUTE =",
      window.location.pathname
    );
  }, [activeTabValue]);

  const handleActiveTabChange = (event, value) => {
    setActiveTabValue(value);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleCloseMenu = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <div
              className={classes.brandContainer}
              component={Link}
              to="/"
              onClick={() => {
                window.location.pathname = "/"; // TO FIX: avoid refresh
                setActiveTabValue(0);
              }}
            >
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
            </div>

            <Tabs
              className={classes.tabsContainer}
              classes={{ flexContainer: classes.tabsFlexContainer }}
              indicatorColor="primary"
              component="nav"
              value={activeTabValue}
              onChange={handleActiveTabChange}
            >
              <Tab
                className={classes.tab}
                classes={{ selected: classes.tabActive }}
                component={Link}
                to="/"
                label="Accueil"
                tabIndex={0}
              />
              <Tab
                className={classes.tab}
                classes={{ selected: classes.tabActive }}
                component={Link}
                to="/services"
                label="Services"
                tabIndex={0}
                aria-haspopup={anchorEl ? "true" : undefined}
                aria-owns={anchorEl ? "services-menu" : undefined}
                onClick={(event) => handleOpenMenu(event)}
                onMouseOver={(event) => handleOpenMenu(event)}
              />
              <Tab
                className={classes.tab}
                classes={{ selected: classes.tabActive }}
                component={Link}
                to="/manifesto"
                label="Manifeste"
                tabIndex={0}
              />
              <Tab
                className={classes.tab}
                classes={{ selected: classes.tabActive }}
                component={Link}
                to="/about"
                label="&Eacute;quipe"
                tabIndex={0}
              />
              <Tab
                className={classes.tab}
                classes={{ selected: classes.tabActive }}
                component={Link}
                to="/contact"
                label="Contact"
                tabIndex={0}
              />
            </Tabs>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Devis gratuit
            </Button>

            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              MenuListProps={{ onMouseLeave: handleCloseMenu }}
            >
              <MenuItem
                component={Link}
                to="/web-design"
                onClick={() => {
                  handleCloseMenu();
                  setActiveTabValue(TABS_ROUTES.indexOf("/services"));
                }}
              >
                Design web
              </MenuItem>
              <MenuItem
                component={Link}
                to="/web-development"
                onClick={() => {
                  handleCloseMenu();
                  setActiveTabValue(TABS_ROUTES.indexOf("/services"));
                }}
              >
                Développement web
              </MenuItem>
              <MenuItem
                component={Link}
                to="/web-quality-audit"
                onClick={() => {
                  handleCloseMenu();
                  setActiveTabValue(TABS_ROUTES.indexOf("/services"));
                }}
              >
                Audit qualité web
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
    </>
  );
}
