import React from "react";
import Deposits from "./Deposits";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "../styles/TabPanelStyle";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import Portfolio from "../components/Portfolio";

export default function Operations() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.tabPannelRoot}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container direction="column" spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            <Divider />
            <Grid item>
              <Portfolio />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
