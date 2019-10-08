import React from "react";
import { connect } from "react-redux";
import { setMaterialData } from "../../../store/MainPage/actions";
import getMaterials from "../../../basicComponents/functions/getMaterials";
import MaterialsPanel from "../components/MaterialsPanel";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles/AdminPageStyle";
import Title from "../../../basicComponents/components/Title";
import Grid from "@material-ui/core/Grid";
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://localhost:8000");

function MaterialsPanelContainer(props) {
  const classes = useStyles();
  if (!props.data)
    getMaterials().then(res => {
      props.setMaterialData(res);
    });
  socket.on("updateMaterial", data => {
    props.setMaterialData(data);
  });
  if (props.data) {
    return (
      <Paper className={classes.paper}>
        <Title>Materials Pannel</Title>
        <Grid container className={classes.operationBoxWrap}>
          {props.data.map((item, index) => {
            return (
              <MaterialsPanel
                key={item._id}
                admin={props.user}
                data={props.data}
                material={item}
                index={index}
              />
            );
          })}
        </Grid>
      </Paper>
    );
  }
  return <div>No data yet.</div>;
}
const mapStateToProps = state => {
  return {
    user: state.mainPage.user,
    data: state.mainPage.data
  };
};

const mapDispatchToProps = {
  setMaterialData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialsPanelContainer);
