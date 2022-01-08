import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  useMediaQuery,
  useScrollTrigger,
  useTheme,
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { useHeaderStyles } from "./headerStyles";
import logoSquare from "../../../assets/logo-square.png";

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

const TABS_ROUTES = ["/", "/services", "/manifesto", "/about", "/contact"];
const MENU_OPTIONS = [
  { path: "/web-design", name: "Design web" },
  { path: "/web-development", name: "Développement web" },
  { path: "/web-quality-audit", name: "Audit qualité web" },
];

export function Header() {
  const classes = useHeaderStyles();
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
        anchor="right"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem
            className={
              activeTabValue === 0
                ? classes.drawerItemSelected
                : classes.drawerItem
            }
            component={Link}
            to="/"
            button
            selected={activeTabValue === 0}
            onClick={() => {
              setOpenDrawer(false);
              setActiveTabValue(0);
            }}
          >
            <ListItemText>Accueil</ListItemText>
          </ListItem>

          <ListItem
            className={
              activeTabValue === 1
                ? classes.drawerItemSelected
                : classes.drawerItem
            }
            component={Link}
            to="/services"
            button
            selected={activeTabValue === 1}
            onClick={() => {
              setOpenDrawer(false);
              setActiveTabValue(1);
            }}
          >
            <ListItemText>Services</ListItemText>
          </ListItem>

          <ListItem
            className={
              activeTabValue === 2
                ? classes.drawerItemSelected
                : classes.drawerItem
            }
            component={Link}
            to="/manifesto"
            button
            selected={activeTabValue === 2}
            onClick={() => {
              setOpenDrawer(false);
              setActiveTabValue(2);
            }}
          >
            <ListItemText>Manifeste</ListItemText>
          </ListItem>

          <ListItem
            className={
              activeTabValue === 3
                ? classes.drawerItemSelected
                : classes.drawerItem
            }
            component={Link}
            to="/about"
            button
            selected={activeTabValue === 3}
            onClick={() => {
              setOpenDrawer(false);
              setActiveTabValue(3);
            }}
          >
            <ListItemText>&Eacute;quipe</ListItemText>
          </ListItem>

          <ListItem
            className={
              activeTabValue === 4
                ? classes.drawerItemSelected
                : classes.drawerItem
            }
            component={Link}
            to="/contact"
            button
            selected={activeTabValue === 4}
            onClick={() => {
              setOpenDrawer(false);
              setActiveTabValue(4);
            }}
          >
            <ListItemText>Contact</ListItemText>
          </ListItem>

          <ListItem
            component={Link}
            to="/"
            onClick={() => setOpenDrawer(false)}
          >
            <Button
              variant="contained"
              color="secondary"
              className={classes.drawerButton}
            >
              Devis gratuit
            </Button>
          </ListItem>
        </List>
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
