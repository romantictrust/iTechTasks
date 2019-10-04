import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles/AdminPageStyle";
import Title from "../../../basicComponents/components/Title";

export default function Activities(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Title>Materials Pannel</Title>
    </Paper>
  );
}
