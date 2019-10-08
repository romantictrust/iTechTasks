import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Deposits from "../components/Deposits";
import useStyles from "../styles/TabPanelStyle";
import {
  setProfitData,
  setUsersData,
  setPaymentOperation,
  setMaterialData
} from "../../../store/MainPage/actions";
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://localhost:8000");

export function DepositsContainer(props) {
  const classes = useStyles();
  socket.on("updateMaterial", data => {
    props.setMaterialData(data);
  });
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
  setMaterialData,
  setPaymentOperation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositsContainer);
