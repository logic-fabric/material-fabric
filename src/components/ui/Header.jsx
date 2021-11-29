import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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

export function Header() {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>Material fabric</Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />
    </>
  );
}
