import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { routes } from "./routes";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
  },
});

//1. add change event to change color on click

export const NavBar = () => {
  const classes = useStyles();
  return (
    <BottomNavigation showLabels className={classes.root}>
      {routes.map(({ name, path }) => (
        <BottomNavigationAction
          component={Link}
          to={path}
          label={name}
          key={name}
          value={name}
        />
      ))}
    </BottomNavigation>
  );
};
