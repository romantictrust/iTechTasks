import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "../styles/TabPanelStyle";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import PortfolioContainer from "../containers/PortfolioContainer";
import ProfitConatainer from '../containers/ProfitConatainer';
import DepositsContainer from '../containers/DepositsContainer';

export default function Operations(props) {
  const classes = useStyles();
  if (props.data) {
    return (
      <div className={classes.tabPannelRoot}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container direction="column" spacing={3}>
              <DepositsContainer />
              <Divider />
              <Grid item>
                <PortfolioContainer/>
              </Grid>
              <Grid item>
                <ProfitConatainer/>
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
