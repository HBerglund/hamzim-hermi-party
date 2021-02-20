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

/* 

 <Layout> 
  <... />
 </Layout>

*/

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.container}
        style={{ minHeight: "100vh" }}
        alignItems="center"
        justify="center"
        direction="column"
      >
        {children}
      </Grid>
    </div>
  );
};
