import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Deposits from "../components/Deposits";
import useStyles from "../styles/TabPanelStyle";

export function DepositsContainer(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.operationBoxWrap}>
      {props.data.map(item => {
        return <Deposits key={item._id} materialsData={item} />;
      })}
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    data: state.mainPage.data
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositsContainer);
