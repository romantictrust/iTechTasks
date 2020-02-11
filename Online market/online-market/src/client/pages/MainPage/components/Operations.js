import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import useStyles from "../styles/TabPanelStyle";
import PortfolioContainer from "../containers/PortfolioContainer";
import ProfitConatainer from "../containers/ProfitConatainer";
import DepositsContainer from "../containers/DepositsContainer";
import Loader from "../../../shared/components/Loader";

export default function Operations(props) {
  const classes = useStyles();
  const { data } = props;
  if (data) {
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
                <PortfolioContainer />
              </Grid>
              <Grid item>
                <ProfitConatainer />
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Loader />
    </Container>
  );
}
