import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  makeStyles,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
  drawerIconContainer: {
    marginLeft: "auto",
    color: "white",
    fontSize: "2rem",

    "&:hover": {
      background: "transparent",
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

const TABS_ROUTES = ["/", "/services", "/manifesto", "/about", "/contact"];
const MENU_OPTIONS = [
  { path: "/web-design", name: "Design web" },
  { path: "/web-development", name: "Dévelopement web" },
  { path: "/web-quality-audit", name: "Audit qualité web" },
];

export function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [activeTabValue, setActiveTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(-1);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    switch (window.location.pathname) {
      case TABS_ROUTES[0]:
        if (activeTabValue !== 0) {
          setActiveTabValue(0);
          setSelectedMenuItemIndex(-1);
        }
        break;
      case TABS_ROUTES[1]:
        if (activeTabValue !== 1) {
          setActiveTabValue(1);
          setSelectedMenuItemIndex(-1);
        }
        break;

      case TABS_ROUTES[2]:
        if (activeTabValue !== 2) {
          setActiveTabValue(2);
          setSelectedMenuItemIndex(-1);
        }
        break;
      case TABS_ROUTES[3]:
        if (activeTabValue !== 3) {
          setActiveTabValue(3);
          setSelectedMenuItemIndex(-1);
        }
        break;
      case TABS_ROUTES[4]:
        if (activeTabValue !== 4) {
          setActiveTabValue(4);
          setSelectedMenuItemIndex(-1);
        }
        break;
      case MENU_OPTIONS[0].path:
        setActiveTabValue(1);
        setSelectedMenuItemIndex(0);

        break;
      case MENU_OPTIONS[1].path:
        setActiveTabValue(1);
        setSelectedMenuItemIndex(1);

        break;
      case MENU_OPTIONS[2].path:
        setActiveTabValue(1);
        setSelectedMenuItemIndex(2);

        break;
      default:
        break;
    }

    console.log(
      "activeTabValue =",
      activeTabValue,
      "| selectedMenuItemIndex =",
      selectedMenuItemIndex,
      "| ROUTE =",
      window.location.pathname
    );
  }, [activeTabValue, selectedMenuItemIndex]);

  const handleActiveTabChange = (value) => {
    setActiveTabValue(value);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedMenuItemIndex(index);
  };

  const tabs = (
    <>
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

      <Button variant="contained" color="secondary" className={classes.button}>
        Devis gratuit
      </Button>

      <Menu
        classes={{ paper: classes.menu }}
        elevation={4}
        id="services-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        PopoverClasses={{ root: classes.menuPopover }}
        MenuListProps={{ onMouseLeave: handleCloseMenu }}
      >
        {MENU_OPTIONS.map((option, index) => (
          <MenuItem
            classes={{ root: classes.menuItem }}
            component={Link}
            to={option.path}
            selected={
              index === selectedMenuItemIndex &&
              activeTabValue === TABS_ROUTES.indexOf("/services")
            }
            key={`menu-option-${index}`}
            onClick={(event) => {
              handleCloseMenu();
              handleMenuItemClick(event, index);
              setActiveTabValue(TABS_ROUTES.indexOf("/services"));
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        Example drawer
      </SwipeableDrawer>

      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar className={classes.toolbar}>
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

              <Typography
                className={classes.logoText}
                variant="h2"
                component="p"
              >
                Material fabric
              </Typography>
            </div>

            {isSmallScreen ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
    </>
  );
}
