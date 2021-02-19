import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    spacing: theme.spacing(2),
  },
}));

const Container = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.container}
        alignItems="center"
        justify="center"
        direction="column"
      ></Grid>
    </div>
  );
};

export default Container;
