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
import Profit from "../components/Profit";
import { connect } from "react-redux";

function Operations(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  if (props.data) {
    return (
      <div className={classes.tabPannelRoot}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container direction="column" spacing={3}>
              {/* Recent Deposits */}
              <Grid container className={classes.operationBoxWrap}>
                {props.data.map(item => {
                  return (
                    <Grid key={item._id} item className={classes.operationsBox}>
                      <Paper className={fixedHeightPaper}>
                        <Deposits materialsData={item} />
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
              <Divider />
              <Grid item>
                <Portfolio materialsData={props.data} />
              </Grid>
              <Grid item>
                <Profit materialsData={props.data} />
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  } else
    return (
      <Container maxWidth="lg" className={classes.container}>
        NO DATA YET
      </Container>
    );
}

const mapStateToProps = state => {
  return {
    data: state.materials.data
  };
};

export default connect(
  mapStateToProps,
  null
)(Operations);