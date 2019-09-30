import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Deposits from "../components/Deposits";
import useStyles from "../styles/TabPanelStyle";
import { setProfitData, setUsersData, setPaymentOperation } from "../../../store/MainPage/actions";

export function DepositsContainer(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.operationBoxWrap}>
      {props.data.map((item, index) => {
        return (
          <Deposits
            key={item._id}
            materialsData={item}
            materialIndex={index}
            userData={props.user}
            setProfitData={props.setProfitData}
            setUsersData={props.setUsersData}
            setPaymentOperation={props.setPaymentOperation}
          />
        );
      })}
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    data: state.mainPage.data,
    user: state.mainPage.user
  };
};

const mapDispatchToProps = {
  setProfitData,
  setUsersData,
  setPaymentOperation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositsContainer);
